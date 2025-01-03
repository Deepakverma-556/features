import React, { useState } from 'react'
import { Plus } from '../utils/icon'
import CustomInput from '../common/CustomInput'

const MyForm = () => {
  const [formValue, setFormValue] = useState({
    standort: "",
    titel: "",
    datum: "",
    preis: "",
    description: "",
    kategorie: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue({
      standort: "",
      titel: "",
      datum: "",
      preis: "",
      description: "",
      kategorie: ""
    });
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  const [files, setFiles] = useState([]);
  function handleOnChange(e) {
    const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }
  return (
    <div className='min-h-screen flex items-center justify-center py-[60px] max-sm:py-12 bg-primary'>
      <div className='max-w-[800px] mx-auto px-4 font-openSans'>
        <h1 className='font-bold text-4xl max-sm:text-3xl leading-[44px] text-neutral-950 text-center pb-5 max-sm:pb-3'>Event einsenden</h1>
        <p className='font-light text-xl max-sm:text-lg leading-[30px] text-neutral-500 text-center'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <div className='flex max-w-[763px] overflow-x-auto mx-auto items-center bg-white py-[7.34px] px-4 gap-4 rounded-[30px] border-[0.5px] border-dashed border-lightGray mt-5'>
          {files.map((file, index) => (
            <img key={index} src={file} className={`h-24 rounded-[13px]`} />
          ))}
          <input type="file" multiple onChange={handleOnChange} className='hidden' />
          <button onClick={() => document.querySelector('input[type="file"]').click()} type='button' className='flex py-[30px] px-[38px] rounded-[13px] border-[0.5px] border-dashed border-lightGray'><Plus /></button>
        </div>
        <form onSubmit={handleSubmit} action="#" className='pt-5 max-w-[763px] mx-auto'>
          <select onChange={handleChange} value={formValue.kategorie} name="kategorie" id="kategorie" className='appearance-none bg-no-repeat cursor-pointer max-sm:font-semibold outline-none w-full py-[16.84px] border-[0.5px] border-lightGray rounded-[30px] px-4 text-sm font-bold leading-[21px] text-neutral-500'>
            <option value="kategorie">Kategorie</option>
            <option value="optionOne">option one</option>
            <option value="optionTwo">option two</option>
          </select>
          <div className='sm:flex gap-5 py-5 max-sm:py-4'>
            <CustomInput myValue={formValue.titel} customChange={handleChange} myId="titel" myClass="sm:!w-1/2 max-sm:!mb-4 w-full" myPlaceholder="Titel" myType="text" />
            <CustomInput myValue={formValue.datum} customChange={handleChange} myId="datum" myClass="sm:!w-1/2 w-full" myPlaceholder="Datum" myType="text" />
          </div>
          <div className='sm:flex gap-5 pb-5 max-sm:pb-4'>
            <CustomInput myValue={formValue.standort} customChange={handleChange} myId="standort" myClass="sm:!w-1/2 max-sm:!mb-4 w-full" myPlaceholder="Standort" myType="email" />
            <CustomInput myValue={formValue.preis} customChange={handleChange} myId="preis" myClass="sm:!w-1/2 w-full" myPlaceholder="Preis" myType="password" />
          </div>
          <textarea value={formValue.description} onChange={handleChange} name="description" id="description" className='text-black resize-none w-full pt-[55.5px] pb-[33.17px] max-sm:pt-9 max-sm:pb-4 max-sm:font-semibold px-4 outline-none border-[0.5px] border-lightGray rounded-[30px] font-bold text-sm leading-[21px]' placeholder='Details zur Veranstaltung'></textarea>
          <button className='font-bold max-sm:font-semibold text-base leading-6 text-white text-nowrap py-4 px-[114.5px] max-sm:px-24 bg-gradient-to-r from-darkBlue to-lightBlue rounded-[30px] text-center flex mx-auto mt-5 max-sm:mt-4 !transition-all !duration-700 hover:bg-gradient-to-r hover:from-lightBlue hover:to-darkBlue'>Event einsenden</button>
        </form>
      </div>
    </div>
  )
}

export default MyForm