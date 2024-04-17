import { useState } from 'react'
import axios from 'axios';
import PhotosUploader from '../PhotosUploader';
import Perks from '../Perks';
import AccountNav from '../AccountNav';


function FormPage() {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
  
    function inputHeader(text) {
      return <h2 className='text-2xl mt-4'>{text}</h2>;
    }

    function inputDescription(text) {
      return <p className='text-gray-500 text-sm'>{text}</p>;
    }

    function preInput(header, description) {
      return (
        <>
          {inputHeader(header)}
          {inputDescription(description)}
        </>
      );
    }

    async function addNewPlace(ev) {
      ev.preventDefault();
      await axios.post('/places', {
        title,
        address,
        addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
      });
    }
  return (
    <div>
      <AccountNav />
        <form onSubmit={addNewPlace}>
          {preInput('Title', 'title for your place.')}
          <input
            type='text'
            placeholder='title, for example: My lovely apt'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          {preInput('Address', 'Address to this place.')}
          <input
            type='text'
            placeholder='address'
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
          />
          {preInput('Photos', 'Add some photos.')}        
          <PhotosUploader
            addedPhotos={addedPhotos}
            onChange={setAddedPhotos}
          />

          {preInput('Description', 'description of the place')}
          <textarea
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          {preInput('Perks', 'select all the perks of your place')}
          <div className='grid mt-2 gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            <Perks selected={perks} onChange={setPerks} />
          </div>
            {preInput('Extra info', 'house rules, etc')}
          <textarea
            value={extraInfo}
            onChange={(ev) => setExtraInfo(ev.target.value)}
          />
          {preInput('Check in&out times', 'add check in and out')}
          <div className='grid gap-2 sm:grid-cols-3'>
            <div>
              <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input
                  type='text'
                  placeholder='14:00PM'
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                />
            </div>
            <div>
              <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input
                  type='text'
                  placeholder='11:00AM'
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                />
            </div>
            <div>
              <h3 className='mt-2 -mb-1'>Max number of guests</h3>
                <input
                  type='number'
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                />
            </div>
          </div>
          <button className='primary my-4'>Save</button>
        </form>
    </div>
  )
}

export default FormPage
