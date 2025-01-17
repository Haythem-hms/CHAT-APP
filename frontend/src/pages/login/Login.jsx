import { Link } from "react-router-dom";

const Login = () => {
  return <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  " >
      <h1 className="text-3xl font-semibold text-center text-gray-300" >
        Login
        <span className="text-blue-500"> Chat Application</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50" >Username</span>
          </label>
          <input type="text" placeholder="enter your name" className="w-full input input-bordered h-10 " />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-slate-50" >Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="w-full input input-bordered h-10 " />
        </div>
        <Link to={"/signup"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-slate-50" >{"Don't"} have an account ?</Link>
        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">Login</button>
        </div>
      </form>

    </div>
  </div>;
  }
export default Login;










// la première version du form



// const Login = () => {
//   return <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  " >
//       <h1 className="text-3xl font-semibold text-center text-gray-300" >
//         Login
//         <span className="text-blue-500"> Chat Application</span>
//       </h1>
//       <form>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50" >Username</span>
//           </label>
//           <input type="text" placeholder="enter your name" className="w-full input input-bordered h-10 " />
//         </div>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-slate-50" >Password</span>
//           </label>
//           <input type="password" placeholder="enter your password" className="w-full input input-bordered h-10 " />
//         </div>
//         <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-slate-50" >{"Don't"} have an account ?</a>
//         <div>
//           <button className="btn btn-block btn-sm mt-2 border border-slate-700">Login</button>
//         </div>
//       </form>

//     </div>
//   </div>;
//   }
// export default Login;










