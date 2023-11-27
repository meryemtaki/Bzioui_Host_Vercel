import { Component } from 'react'
import './Comment.css'

export class Comment extends Component {
  render() {
    return (
      <>
      <h1 className="title-comment">Couleurs de peinture commerciales  </h1>
        <div className="cardcom flex justify-center relative top-1/3">
<div className="relative grid grid-cols-1 gap-4 p-4 mb-16 border rounded-lg bg-white shadow-lg">
    <div className="relative flex gap-4">
        <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
            </div>
            <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
    </div>
    <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>


    <div className="">
  <button className=" p-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  </button>

  <button className=" p-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
  </button>

  <button className=" p-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
  </button>
</div>
</div>


        </div>


      </>
    )
  }
}

export default Comment