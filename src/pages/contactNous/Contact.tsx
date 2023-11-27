import { ChangeEvent, FormEvent, useState } from 'react';
import './Contact.css';
import imageproject from "../../assets/project1.png";


const Contact = () => {

  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form data submitted:', formData);
    };

  return (
    <div className='all'>
    <div className='contact-container'>
      <div className='contact'>
          <h3>Contactez-nous</h3>
          <div className='info'>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='23'
                viewBox='0 0 16 23'
                fill='none'
              >
                <path
                  d='M8 0C3.5835 0 0 3.3119 0 7.39286C0 13.9643 8 23 8 23C8 23 16 13.9643 16 7.39286C16 3.3119 12.4165 0 8 0ZM8 11.5C7.3671 11.5 6.74841 11.3073 6.22218 10.9463C5.69594 10.5852 5.28579 10.0721 5.04359 9.47167C4.80138 8.87129 4.73801 8.21064 4.86149 7.57328C4.98496 6.93591 5.28973 6.35045 5.73726 5.89093C6.18479 5.43142 6.75497 5.11849 7.37571 4.99171C7.99645 4.86493 8.63986 4.92999 9.22459 5.17868C9.80931 5.42737 10.3091 5.84851 10.6607 6.38884C11.0123 6.92917 11.2 7.56443 11.2 8.21429C11.1991 9.08542 10.8616 9.9206 10.2617 10.5366C9.6618 11.1526 8.84841 11.499 8 11.5Z'
                  fill='white'
                />
              </svg>
              Promo , Jnan, Société Restinga, Bouskoura 25100
            </p>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
              >
                <path
                  d='M18.9555 14.3408C18.7341 14.1049 17.9525 13.4077 16.5156 12.4853C15.068 11.5547 14.0005 10.9746 13.6943 10.8393C13.6673 10.8273 13.6376 10.8229 13.6083 10.8266C13.579 10.8302 13.5513 10.8418 13.5281 10.86C13.0348 11.2447 12.2044 11.9513 12.1599 11.9895C11.8723 12.2359 11.8723 12.2359 11.6369 12.1591C11.223 12.0234 9.93706 11.3406 8.81654 10.2175C7.69602 9.09445 6.97799 7.77673 6.84227 7.36321C6.76466 7.12741 6.76466 7.12741 7.01192 6.83986C7.05009 6.79532 7.75709 5.96491 8.14177 5.47208C8.16001 5.44888 8.17159 5.42114 8.17525 5.39184C8.17891 5.36255 8.17452 5.33282 8.16255 5.30583C8.02726 4.9992 7.44706 3.93212 6.51655 2.48462C5.59282 1.04814 4.89641 0.266495 4.6606 0.0451066C4.63897 0.0246867 4.61222 0.0104815 4.58318 0.00398773C4.55415 -0.00250602 4.5239 -0.00104779 4.49562 0.00820859C3.67134 0.291469 2.87603 0.652905 2.12056 1.08758C1.39126 1.51154 0.700798 1.99904 0.057224 2.54442C0.0347584 2.56352 0.0179154 2.58837 0.00850116 2.61631C-0.000913064 2.64426 -0.00254329 2.67424 0.00378519 2.70304C0.0924259 3.11612 0.51612 4.84058 1.83089 7.22919C3.17237 9.66701 4.10204 10.916 6.07207 12.8793C8.0421 14.8425 9.33057 15.8281 11.7709 17.1696C14.1596 18.4844 15.8849 18.9085 16.2971 18.9963C16.326 19.0025 16.356 19.0009 16.384 18.9915C16.412 18.9821 16.437 18.9653 16.4562 18.9428C17.0015 18.2993 17.4888 17.6088 17.9126 16.8795C18.3472 16.124 18.7086 15.3287 18.992 14.5045C19.0011 14.4764 19.0025 14.4464 18.996 14.4176C18.9896 14.3889 18.9756 14.3623 18.9555 14.3408Z'
                  fill='white'
                />
              </svg>
              0600-629191
            </p>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='21'
                height='16'
                viewBox='0 0 21 16'
                fill='none'
              >
                <path
                  d='M18.375 0H2.625C1.92904 0.000721921 1.26179 0.269135 0.769667 0.746344C0.277545 1.22355 0.000744481 1.87058 0 2.54545V13.4545C0.000744481 14.1294 0.277545 14.7764 0.769667 15.2537C1.26179 15.7309 1.92904 15.9993 2.625 16H18.375C19.071 15.9993 19.7382 15.7309 20.2303 15.2537C20.7225 14.7764 20.9993 14.1294 21 13.4545V2.54545C20.9993 1.87058 20.7225 1.22355 20.2303 0.746344C19.7382 0.269135 19.071 0.000721921 18.375 0ZM17.7103 4.21045L10.9603 9.30136C10.8287 9.40059 10.6667 9.45445 10.5 9.45445C10.3333 9.45445 10.1713 9.40059 10.0397 9.30136L3.28969 4.21045C3.21038 4.15238 3.14377 4.0796 3.09372 3.99634C3.04367 3.91309 3.01118 3.82102 2.99815 3.72548C2.98511 3.62995 2.99179 3.53285 3.01778 3.43984C3.04378 3.34683 3.08858 3.25975 3.14958 3.18367C3.21058 3.1076 3.28656 3.04403 3.37312 2.99668C3.45967 2.94932 3.55506 2.91912 3.65376 2.90782C3.75245 2.89653 3.85248 2.90436 3.94802 2.93088C4.04357 2.95739 4.13272 3.00206 4.21031 3.06227L10.5 7.80591L16.7897 3.06227C16.947 2.9471 17.1447 2.89659 17.34 2.92166C17.5354 2.94673 17.7128 3.04536 17.8338 3.19624C17.9547 3.34711 18.0096 3.5381 17.9865 3.72789C17.9634 3.91769 17.8642 4.09104 17.7103 4.21045Z'
                  fill='white'
                />
              </svg>
              support@example.com
            </p>
          </div>
      </div>
      <div className='map-container'>
  {/* Map Section */}
  <a
    href="https://www.google.com/maps/dir/33.5687175,-7.5917148/Bzioui+Immobilier,+promo+,+Jnan,+Soci%C3%A9t%C3%A9+Restinga,+Bouskoura+25100/@33.5051811,-7.6079378,12z/data=!3m1!4b1!4m18!1m8!3m7!1s0xda62f3bd6f20c6d:0x7d5d46e940d90644!2sBzioui+Immobilier!8m2!3d33.4544403!4d-7.6417095!15sCjBQcm9tbywgSm5hbiwgU29jacOpdMOpIFJlc3RpbmdhLCBCb3Vza291cmEgMjUxMDBaLyItcHJvbW8gam5hbiBzb2Npw6l0w6kgcmVzdGluZ2EgYm91c2tvdXJhIDI1MTAwkgEVcmVhbF9lc3RhdGVfZGV2ZWxvcGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU50YXpSbFFsRlJFQUXgAQA!16s%2Fg%2F11qj_v6sjs!4m8!1m1!4e1!1m5!1m1!1s0xda62f3bd6f20c6d:0x7d5d46e940d90644!2m2!1d-7.6417095!2d33.4544403?hl=en&entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.5829981092074!2d-7.618894085108295!3d33.52103268075197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad4cd05ab02b3e7%3A0x58996bce3a84ebd7!2sPromo%20-%20Jnan%20Soci%C3%A9t%C3%A9%20Restinga!5e0!3m2!1sen!2sma!4v1634138888882!5m2!1sen!2sma"
      width="600"
      height="450"
      // allowFullScreen=""
      loading="lazy"
    ></iframe>
  </a>
</div>

    </div>
    <div className="contact-container">
      <img src={imageproject} alt="" style={{cursor:"pointer"}}/>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="allinput">

          <div className='inpt'>
            <label htmlFor="firstName">Name:</label>
            <br></br>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder='Entre votre name'
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='inpt'>
            <label htmlFor="lastName">Prenom:</label>
            <br></br>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder='Entre votre prenom'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='inpt'>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Entre votre email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='inpt'>
            <label htmlFor="subject">Sujet:</label>
            <br></br>
            <input
              type="text"
              id="sujet"
              name="sujet"
              placeholder='Entre votre sujet'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className='inpt'>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea
              id="message"
              name="message"
              placeholder='Entre votre message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className='btn'>
            <button type="submit">Envoyer</button>
          </div>

        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact 