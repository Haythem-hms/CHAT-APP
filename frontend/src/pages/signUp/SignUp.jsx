import GenderCheckbox from "./GenderCheckbox";
const SignUp = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  " >
      <h1 className="text-3xl font-semibold text-center text-gray-300" >
        SignUp
        <span className="text-blue-500"> Chat Application</span>
      </h1>
      <form>
      <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50" >Fullname</span>
          </label>
          <input type="text" placeholder="enter your Full name" className="w-full input input-bordered h-10 " />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50 " >Username</span>
          </label>
          <input type="text" placeholder="enter your name" className="w-full input input-bordered h-10 " />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50" >Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="w-full input input-bordered h-10 " />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50" >Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm your password" className="w-full input input-bordered h-10 " />
        </div>
        <GenderCheckbox/>
        <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-slate-50" >Already have an account ?</a>
        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
        </div>
      </form>

    </div>
  </div>;
  
}
export default SignUp;


























// la permière version 


// import GenderCheckbox from "./GenderCheckbox";
// const SignUp = () => {
//   return <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  " >
//       <h1 className="text-3xl font-semibold text-center text-gray-300" >
//         SignUp
//         <span className="text-blue-500"> Chat Application</span>
//       </h1>
//       <form>
//       <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50" >Fullname</span>
//           </label>
//           <input type="text" placeholder="enter your Full name" className="w-full input input-bordered h-10 " />
//         </div>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50 " >Username</span>
//           </label>
//           <input type="text" placeholder="enter your name" className="w-full input input-bordered h-10 " />
//         </div>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50" >Password</span>
//           </label>
//           <input type="password" placeholder="enter your password" className="w-full input input-bordered h-10 " />
//         </div>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50" >Confirm Password</span>
//           </label>
//           <input type="password" placeholder="confirm your password" className="w-full input input-bordered h-10 " />
//         </div>
//         <GenderCheckbox/>
//         <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-slate-50" >Already have an account ?</a>
//         <div>
//           <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//         </div>
//       </form>

//     </div>
//   </div>;
  
// }
// export default SignUp;






