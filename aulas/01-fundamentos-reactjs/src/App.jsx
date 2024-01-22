// Extensão JSX = JavaScript + XML (HTML). Um arquivo com extensão JSX provevelmente é um componente

// Um componente é uma função que retorna algum HTML

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatar_url: "", name:"", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/HenriqueSC23.png',
      name: 'Henrique Santos Cesar',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Eaí Pessoal! 👋'},
      {type: 'paragraph', content: 'Estou fazendo um projeto de feed, que aprendi pelo curso da Rocketseat,'},
      {type: 'paragraph', content: 'acesse meu perfil do linkedIn:'},
      {type: 'link', content: 'https://www.linkedin.com/in/henrique-santos-cesar-b56681260/'} 
    ],
    publishedAt: new Date('2024-01-17 04:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nathália Santos Cesar',
      role: 'Designer'
    },
    content: [
      {type: 'paragraph', content: 'Eaí Pessoal! 👋'},
      {type: 'paragraph', content: 'Estou fazendo um projeto de feed, que aprendi pelo curso da Rocketseat,'},
      {type: 'paragraph', content: 'acesse meu perfil do linkedIn:'},
      {type: 'link', content: 'https://www.linkedin.com/in/henrique-santos-cesar-b56681260/'} 
    ],
    publishedAt: new Date('2024-01-12 11:00:00')
  }
];

export function App() {

  return (
    <div>
    <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}


