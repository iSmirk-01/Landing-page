import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Notice from '../components/Notice';

function page() {
  return (
    <div className="flex flex-col overflow-x-hidden h-screen gap-4 items-center w-screen">
      <NavBar />
      <Notice />
      <div className=" text-white flex flex-col h-screen justify-center items-center w-screen overflow-hidden">
        <div className="flex flex-col bg-slate-800 p-4 rounded-lg w-fit h-fit m-4 justify-center text-2xl border border-sky-300">
          <br />
            <p className='text-red-600 font-bold'>under construction</p>
        </div>
      </div>

      <Footer footer="Disclaimer: All custom build services come with a money back guarantee if parts are delivered damaged or defective. Replacements are subject to the supplier the component was purchased from. I 'do not' purchase parts for customers." />
    </div>
  );
}

export default page
