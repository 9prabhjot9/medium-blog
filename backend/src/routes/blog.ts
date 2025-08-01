import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createblogInput, updateblogInput } from "@prabhjot9/medium-blog-common";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || ""
    try {
         const user = await verify(authHeader, c.env.JWT_SECRET) as { id: string}
    if(user){
        c.set("userId", user.id)
       await next() 
    } else{
        return c.json({
            message: "You are not logged in"
        })
    }
    }catch(e){
        c.status(403);
            return c.json({
                message: "You are not logged in"
            })
    }
   
})  


blogRouter.post('/', async(c) => {
    const body = await c.req.json()
    const { success } = createblogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid inputs"
        })
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())


    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

  return c.json({
    id: post.id
  })
})


blogRouter.put('/', async(c) => {
    const body = await c.req.json()
    const { success } = updateblogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

  return c.json({
    id: post.id
  })
})


//to get all the blogs
//Todo: add paggination
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const posts = await prisma.post.findMany()

    return c.json({
        posts
    })
})


//to get single blog
blogRouter.get('/:id', async(c) => {
    const id = await c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
         const post = await prisma.post.findFirst({
        where: {
            id: id
        }
    })
    
  return c.json({
    post
  })
    } catch(e){
        c.status(411)
        return c.json({
            message: "Error while fetching blog posts"
        })
    }
   
})


