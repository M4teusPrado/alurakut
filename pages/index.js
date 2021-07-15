import React from 'react';

import MainGrid from '../src/components/MainGrid/index'
import Box  from '../src/components/Box/index'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

function ProfileSideBar(propriedades) {

  return (
    <Box>
      <img src={`https://www.github.com/${propriedades.githubUser}.png`} style = {{ borderRadius: '8px'}}/> 
      <hr/>

      <p>
        <a className = "boxLink" href = {`https://www.github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      
      
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )

}


export default function Home() {

  const [comunidades, setComunidades] = React.useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  const githubUser = 'M4teusprado'; 
  const pessoasFavoritas = [
      'juunegreiros', 
      'omariosouto', 
      'peas', 
      'rafaballerini',  
      'marcobrunodev',
      'felipefialho']


  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className ="profileArea" style= {{ gridArea: 'profileArea'}} >
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className = "title"> Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className = "subTitle" >O que voce deseja fazer?</h2>
            <form onSubmit={ function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosForm = new FormData(e.target);

              const comunidade = {
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);


            } }>
                <div>
                  <input 
                    placeholder = "Qual vai ser o nome da sua comunidade?" 
                    name="title" 
                    aria-label="Qual vai ser o nome da sua comunidade?"
                    type="text"
                  />
                </div>
                <div>
                  <input 
                    placeholder = "Coloque uma URL para usarmos de capa" 
                    name="image" 
                    aria-label="Coloque uma URL para usarmos de capa"
                  
                  />
                </div>
                
                <button>
                  Criar comunidade
                </button>
              </form>
          </Box>

        </div>

        <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <ul>              
              {comunidades.map((itemAtual) => { 
                return (
                  <li>
                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className = "smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>              
              {pessoasFavoritas.map((itemAtual) => { 
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades 
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
