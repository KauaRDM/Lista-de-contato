import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
export function Home() {

  
  
  return (
    <div className={style.container}>

      <CardPerson
        cover="https://i.pinimg.com/originals/0f/7b/0f/0f7b0f1870f7261bbd2b06df9d5a08d4.jpg"
        avatar="https://avatars.githubusercontent.com/u/110574238?s=400&u=485a06cc02d4b7cbd66a6d9cb069229c36945611&v=4"
        name="Kauã de Morua"
        office= 'Estudante de TI'/>


<div className={style.contatos}>
<div  className={style.controles}>
  <form >
      
            <div className={style.headerContatos}>
            <h1 className={style.title}>Lista de contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom}> <IoAdd /> </button>
              <button  className={style.buttom}> <IoPencil /> </button>
              <button  className={style.buttom}> <BsFillTrash3Fill /> </button>
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            <input type='text' name='pesquisa' className={style.inputPesquisa}/>
            </div>
            
            </form>
        </div>

<div className={style.listaContatos}>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>A</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznzV2D8oI3jYSEddZ6DtTlwCgbcJMwWODog&usqp=CAU"
    name="Ana Maria"
    numero= '(55) 9060-1656)'/>
  </div> 
</div>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>M</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://img.r7.com/images/messi-com-a-camisa-do-gremio-24052021082937185?dimensions=771x420&"
    name="Messi"
    numero= '(55) 9969-1229'/>
    <CardContato
    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMswYCHobXATW-dglkE70fKDLjlaR9Cphp2A&usqp=CAU"
    name="Manoel Gemos"
    numero= '(55) 9989-1329'/>
  </div>
</div>
    <div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>N</h1>
  <div className={style.contatoCatalogo}>
    <CardContato
    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SeE1RnrMg7SC1lOIpAI3zxCIY_LaWqnpdA&usqp=CAU"
    name="Neymar"
    numero= '(55) 9869-1932'/>
  </div>
</div>

    </div>
    </div>
</div>    
  );
}