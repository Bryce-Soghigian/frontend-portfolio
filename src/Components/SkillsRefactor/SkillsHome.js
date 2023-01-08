import {useMemo} from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { TextureLoader } from 'three'
// import { Canvas, useFrame, useLoader } from '@react-three/fiber'
function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 100000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
}

function Cube(props) {
  const {size, img} = props
  const [ref] = useBox(() => ({ mass:10, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  const texture = useMemo(() => new TextureLoader().load(img), [])
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshLambertMaterial map={texture} />
    </mesh>
  )
}
function Skill({ img }) {
  return (
  
  <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [-1, 5, 5], fov: 45 }} styles={{ height: '94vh', width: '100vw' }} >
    <color attach="background" args={['lightblue']} />
    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
    <Physics>
      <Plane position={[0, -2.5, 0]} />
    {[...Array(5)].map((_, index) => {
      return <Cube position={[0.1, 5, 0]} img={img} size={index}/>
    })}
    </Physics>
  </Canvas>
  )

}
function Skills() {
  return (
    <div>
      <Skill img="https://iili.io/H5ERq9S.md.png"/>
      <Skill img="https://iili.io/H5GGAV2.md.jpg"/>
      <Skill img="https://iili.io/H5GGAV2.md.jpg"/>
      <Skill img="https://iili.io/H5GGAV2.md.jpg"/>
      <Skill img="https://iili.io/H5GGAV2.md.jpg"/>
    </div>
  )
}
export default Skills
