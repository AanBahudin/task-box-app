import aboutImage from '../../assets/images/about.svg'

const About = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-between items-center min-h-[30vh]" id='about'>
      <section className='w-[45%] my-10 text-bluePrimary'>
        <h1 className='text-4xl font-semibold text-bluePrimary mb-5 '>About Us</h1>
        <h5>At TaskBox, we understand that in today`&apos;`s fast-paced world, staying organized is the key to success. Life can be hectic, and managing tasks efficiently can be a challenge. That`&apos;`s why we created TaskBox, the ultimate solution for task management.</h5>

        <h5 className='mt-8'>Our mission is simple: to empower you to take control of your tasks, increase your productivity, and reduce the stress that comes with a busy life. We believe that when you have a clear plan and an organized approach, you can accomplish anything.</h5>
      </section>

      <img className='w-[35%] rounded-3xl bg-gradient-to-r from-[#9B59B6] to-[#3498DB] py-16 px-20' src={aboutImage} alt='ilustration' />
    </div>
  )
}

export default About