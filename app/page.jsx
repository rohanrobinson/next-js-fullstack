'use client'
import styles from './page.module.css';
import prisma from '@/lib/prisma';
import Post from '@/app/components/Post';
import User from '@/app/components/User';
import Link from 'next/link';

async function getPosts() { 
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  });
  return posts;
}

async function getUsers() {
  const users = await prisma.user.findMany({});
  return users;
}

export default async function Home() {
  
  const users = await getUsers();
  const posts = await getPosts();

  console.log({users});
  console.log({posts});

  return (
    <main className={styles.main}>

      <h1><u> Post Feed</u></h1>
      {
        posts.map((post) => {
          return (
            <Post key={post.id} 
              title={post.title}
              content={post.content}
              authorName={post.author.name}>
            </Post>
          )
        })
      }

      <h1><u>User Feed</u></h1>
      {
        users.map((user) => { 
          return (
            <User key={user.id}
            nameOfUser={user.name}
            >
            </User>
          )
        })
      }

      <Link href="/add-topic">Add Topic</Link>

      </main>
  )
}
