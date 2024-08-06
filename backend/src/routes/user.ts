import { Hono } from 'hono'
import { PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign} from 'hono/jwt'
import { SignupInput, SigninInput, signinInput } from '@pushpenderrajput/medium'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup',async (c)=>{
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      "message":"Inputs are not valid!"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const newuser = await prisma.user.create({
      data:{
        username:body.username,
        name:body?.name,
        password:body.password
      }
    })
    const jwt = await sign({id:newuser.id},c.env.JWT_SECRET)
    return c.json({
      "token":jwt
    })
  }
 
  catch(e){
    return c.json({"msg":"Email Already Registerd!"})
  }
  
  
})
userRouter.post('/signin',async (c)=>{
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      "message":"Inputs are not valid!"
    })
  }
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const user = await prisma.user.findUnique({
      where:{
        username:body.username,
        password:body.password
      }
    })
    if(!user){
      c.status(403)
      return c.text("Invalid username or Password!")
    }
    const jwt = await sign({id:user.id},c.env.JWT_SECRET)
  
    return c.json({
      "token":jwt
    })
  })

  