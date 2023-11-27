import { Component } from 'react'
import './Leavecomment.css'

export class Leavcomment extends Component {
  render() {
    return (
      <>
<div className="flex justify-center items-center bg-white">
	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="cardlvcm w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">laissez un <br /> commentaire</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="prénom*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="nom de famille*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="E-mail*" />
        </div>
				<div className="my-4">
					<textarea placeholder="Votre commentaire*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="btn-lv uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Envoyer
          </button>
				</div>
		</div>


    </div>
</div>


      </>
    )
  }
}

export default Leavcomment
