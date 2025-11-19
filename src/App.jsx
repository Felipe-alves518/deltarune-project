import './App.css'
import Box from './box.jsx'
import ImgBox from './ImgBox.jsx'
import Media from './media.jsx'
import News from './NewsBox.jsx'

function App() {
  
  return (
    
    <div className=''>  {/*Inicio Site*/}

    {/* DIV Gif inicio*/}
   <div className='bg-[#000000] relative overflow-hidden bg-no-repeat bg-center h-[780px] w-screen  flex flex-col items-center justify-center '>
      <img src='src/assets/key-art.gif ' className='z-10 h-[780px] max-h-[780px] max-w-[960px]'/>

      {/* CHILD Div da logo */}
      <div className= "absolute z-20">
        <img src='src/assets/logo.png' className='w-[600px] highlight-white'/>
        <p className='text-[#FFFFFF] font-pixelify text-[50px]  text-center w-96 m-auto'>Chapters 1-4</p>
      </div>
      {/*Fim Div da logo */}

      <div className='absolute bg-[#004FDE] w-full bottom-0 z-0 h-[42px]'/>
      
    </div>  
    {/* DIV Gif Fim*/}

    <div className='bg-[#004FDE] flex flex-col items-center'> {/*Div azul escuro */}
      <p className='text-[#FFFFFF] font-pixelify text-[20px]'>Disponível Agora</p>
      <div className='flex flex-row flex-wrap  w-[500px] justify-center'>
        <Box image = "src/assets/platform-square-steam-tall.png" bgcolor="gray"/>
        <Box image="src/assets/platform-square-switch2.png" bgcolor="red" />
        <Box image="src/assets/platform-square-ps5.png" bgcolor="white" invert = {true}  />
        <Box image="src/assets/platform-square-switch.png" bgcolor="red" />
        <Box image="src/assets/platform-square-ps4.png" bgcolor="blue" />

      </div>

      <iframe width="600" height="320" className='my-[40px]' src="https://www.youtube.com/embed/yDzgiGdekas?si=jTK9o3NiqJIwN_CT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className='items-center justify-center font-pixelify text-center w-[550px] text-wrap'>
      <h2 className='text-[#F9FF10] text-[25px]'>A próxima aventura na franquia Undertale <br/> aparece!</h2>
      <p className='text-[#FFFFFF] highlight-white text-justify' >Se aventure na história paralela de UNDERTALE! Lute ou poupe em 
        batalhas cheias de ação enqunto você explora um mundo misterioso ao lado de um elenco cativante de personagens novos e familiares. Os capítulos 1-4 vão estar disponível no lançamento, com mais atualizações planejadas.
        </p>

        <ul className='text-left px-[20px] highlight-white text-[#FFFFFF]'>
          <li>História e soundtrack escrita por Toby Fox</li>
          <li>Encontre novos personagens principais cativantes, tambem personagens familiares como Toriel, Sans, e mais. Huh? Papyrus? não, ele está ocupado. desculpa</li>
          <li>Animação pixelada fluída e expressiva por Temmie. Ela tambem tem um chapéu novo (em-jogo)</li>
          <li>Sistema de capítulo linear que você pode começar a partir de qualquer ponto</li>
          <li>Batalhas criativas de  desviar de projéteis inspirada em jogos como the Touhou series e Chrono Trigger. </li>
          <li>Chefes secretos, jeviabolicamente difíceis </li>
          <li>E...</li>
          <li>...</li>
          <li>...Apenas 1 final...?</li>
        </ul>
      </div>

      <div className='grid grid-rows-2 grid-flow-col w-[550px] gap-[10px] my-[20px] '>
        <ImgBox img="src/assets/ss-1-en.png"/>
        <ImgBox img="src/assets/ss-4-en.png"/>
        <ImgBox img="src/assets/ss-2-en.png"/>
        <ImgBox img="src/assets/ss-5-en.png"/>
        <ImgBox img="src/assets/ss-3-en.png"/>
        <ImgBox img="src/assets/ss-6-en.png"/>
      </div>

    </div> {/*Div azul escuro FIM */}

   
    <div className=' flex flex-col bg-[#000000] items-center h-fit'> {/*Div final */}
      
       {/*DIV do segundo gif */}
       <div className='m-8'>
      <div className='flex flex-col relative items-center h-[300px] w-[500px] justify-center my-[70px] '>
        <div className='absolute'>
          <img src="src/assets/bg.gif" className=''/>
          <img src="src/assets/ribbon.png" className='absolute left-[50%] top-[80%] translate-x-[-50%] '/>
            <div className=' absolute flex  left-[50%] top-[89%] translate-x-[-50%] h-[8%]'>
              
              <input type='button' value={"PC/Mac"} className=' font-pixelify text-white  border-2 mx-2 px-2 rounded-md border-white'></input>
              <input type='image' className='border-2 mx-2 rounded-md border-white' src='src/assets/platform-switch.png'/>
              <input type='image' className='border-2 mx-2 rounded-md border-white'  src='src/assets/platform-ps4.png'/>
            </div>
        </div>

      <div className='absolute top-[50%]'>
        <img src="src/assets/logo.png" className='w-[300px]'/>
      </div>  
    </div> {/*DIV do segundo gif Fim */}

    </div>


    <p className='font-pixelify text-[#FFFFFF] text-lg '>NOTÍCIAS E ATUALIZAÇÕES</p>
      <div className='bg-[#00004d] w-[400px] h-fit rounded-md m-[20px] flex flex-col justify-items items-center p-[20px] font-pixelify text-[#FFFFFF]'>
        <p>Se inscreva para atualizações recebidas no e-mail não importa o que aconteça com qualquer website na internet </p>
        <div className='border-white border-2 flex flex-col justify-center items-center rounded-md mt-[15px] w-[200px]'>
          <p>Deltarune / Undertale</p> 
          <p className='text-[#F9FF10]'>Lista de e-mails</p>
        </div>  

        <div className='flex'>
        <Media image="src/assets/social-bluesky.svg" />
        <Media image="src/assets/social-twitter.svg"/>
        </div>



      </div>


      <div>
          <div className='flex flex-col'>
          <News image="src/assets/thumb-archive.png" date="Dec 25, 2022 -" title="Arquivo da caixa de correios"/>
          <News image="src/assets/spamton-sweepstakes-logo.png" date="Dec 17, 2022 -" title="$pamton G. $pamton EVENTO ESPECIAL"/>
          <News image="src/assets/thumb-green-room-door.png" date="Sept, 2022 -" title="Deltarune atualização de status"/>
          <News image="src/assets/thumb-ch2-thanks.png" date="Sept, 2021 -" title="Deltarune atualização de status"/>
          <News image="src/assets/thumb-ch2.png" date="Sept, 2020 -" title="Deltarune atualização de status"/>
          </div>
      </div>


    </div> {/*Div final FIM */}


   



    </div> //Fim Site
  
  )
}

export default App
