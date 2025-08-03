import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupInput, signinInput } from '@prabhjot9/medium-common-blog'



export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  } 
}>()



userRouter.post('/signup', async (c) => {
  const body = await c.req.json()
  console.log("Received body:", body);
  
  const result = signupInput.safeParse(body)
  if(!result.success){
    console.log(result.error.flatten());
    
    c.status(411)
    return c.json({
        message: "Inputs are not correct",

    })
  }
  const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })

  const token = await sign({ id: user.id}, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  }) 
  }catch(err){
    c.status(411)
    return c.text('Invalid')
  }


})


userRouter.post('/signin', async(c) => {
  const body = await c.req.json()
   const { success } = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
        message: "Inputs are not correct"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
     const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })

  if(!user){
    c.status(403)
    return c.json({error: "user not found"})
  }

  const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
  return c.text(jwt)
  
  }catch(err){
    console.log(err)
    c.status(403)
    return c.text('Invalid')
  }
 
})