"use client"


import Login from '@/components/modules/auth/Login';
// import CircuitBoard from '@/components/shared/motion/CircuitBoard';
// import GridDistortion from '@/components/shared/motion/GridDistortion';
import MagneticField from '@/components/shared/motion/MagneticField';



export default function LoginPage() {
  

  return (
    <div className='h-screen '>
      <MagneticField>
        <Login/>
      </MagneticField>
    </div>
  );
}
