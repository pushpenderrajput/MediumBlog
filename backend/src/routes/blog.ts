import { Hono } from 'hono'
import { PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
      userId:string
    }
    
}>()

blogRouter.use('/*',async (c,next)=>{
  const authHeader = await c.req.header('authorization') || "";
  const user = await verify(authHeader,c.env.JWT_SECRET);
  if(user){
    //@ts-ignore
    c.set("userId",user.id)
  }else{
    c.status(403);
    return c.json({
      "msg":"You are not Logged In!"
    })
  }
  await next()

})
blogRouter.post('/',async (c)=>{
    const userId = c.get('userId');
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    
    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(userId)
        }
    });
    return c.json({
      "msg":"Blog Dal Gaaya",
      "id":blog.id
    })
})
blogRouter.put('/',async (c)=>{
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    
    const blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    });
    return c.json({
      "msg":"Blog Dal Gaaya",
      "id":blog.id
    })
})

blogRouter.get('/bulk',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const blogs = await prisma.post.findMany();
  return c.json({blogs})
})
blogRouter.get('/:id',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogId = await c.req.param('id')
    try {
        const blog = await prisma.post.findUnique({
            where:{
                id:Number(blogId)
            }
    
        })
        return c.json({
            blog
          })
    }
    catch(e){
        c.status(411)
        return c.json({
            "msg":"Error while Fecthing Blog"
        })

    }
    
    
})

  