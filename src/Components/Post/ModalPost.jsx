import { useState } from "react";
import Modal from "../UX/Modal/Modal";
import { MdOutlineClose } from "react-icons/md";
import ButtonPost from "../UX/ButtonPost/ButtonPost";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsSendCheck } from "react-icons/bs";
import Textarea from "../UX/Textarea/Textarea";
import Loading from "../UX/Loading/Loading";
import Alert from "../UX/Alert/Alert";


export default function ModalPost () {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [alertType, setAlertType] = useState(null)
  const [textAlert, setTextAlert] = useState(null)

  function handlePost(e) {
    e.preventDefault();
    setLoading(true);

    if (text.trim().length > 0) {
      setTimeout(() => {
        setTextAlert("Postagem enviada com sucesso!");
        setAlertType('success');
        setLoading(false);
      }, 1000);

      setTimeout(() => {
        setOpen(false)
        setText('')
        setAlertType('');
        setTextAlert('');
      }, 5000);


    } else {
      setTimeout(() => {
        setTextAlert("Favor escreva algo no campo de texto!");
        setAlertType('warning');
        setLoading(false);
      }, 1000);

      setTimeout(() => {
        setAlertType('');
        setTextAlert('');
      }, 5000);
    }
  }

  return (
    <div>
      {alertType && <Alert textAlert={textAlert} alertType={alertType} />}
      <div className="flex flex-col md:flex-row gap-4">
        <ButtonPost  onClick={() => setOpen(true)} icon={<IoIosAddCircleOutline />} text={'Criar postagem'} background="#0084ff" color="#fff" />
      </div>
      {open && <Modal title="Nova postagem" close={<button onClick={() => setOpen(false)}><MdOutlineClose/></button>}>
        <div>
          <form onSubmit={handlePost} className="flex flex-col justify-between gap-4">
            <Textarea value={text} onChange={(e) => setText(e.target.value)} className="" placeholder="Qual sua motivação hoje?" background="#fff" color="#000" />
            <ButtonPost loading={loading && <Loading /> } icon={<BsSendCheck />} text={'Postar'} background="#0084ff" color="#fff" />
          </form>
        </div>
      </Modal>}
    </div>
  )
} 