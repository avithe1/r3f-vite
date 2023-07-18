// import { useRef, useState } from 'react'
// import { OrbitControls, TorusKnot } from '@react-three/drei'
// import { Canvas, useFrame, extend } from '@react-three/fiber'
// import Button from './Button'
// import ThreeMeshUI from 'three-mesh-ui'
// import * as THREE from 'three'

//extend(ThreeMeshUI)

import AppCanvas from "./js/components/AppCanvas"

export default function App() {
  return (
    <AppCanvas />
    // <Canvas style={{ position: 'fixed', inset: 0 }}>
    //   <color attach="background" args={['black']} />
    //   <OrbitControls />
    //   {/* <Thing /> */}
    //   <Panel />
    // </Canvas>
  )
}

function Title({ accentColor }) {
  return (
    <block
      args={[
        {
          width: 1,
          height: 0.25,
          backgroundOpacity: 0,
          justifyContent: 'center'
        }
      ]}>
      <text content={'Hello '} />
      <text content={'world!'} args={[{ fontColor: accentColor }]} />
    </block>
  )
}

function Panel() {
  const [accentColor] = useState(() => new THREE.Color('red'))
  useFrame(() => {
    ThreeMeshUI.update()
  })
  return (
    <block
      args={[
        {
          width: 1,
          height: 0.5,
          fontSize: 0.1,
          backgroundOpacity: 1,
          fontFamily: './Roboto-msdf.json',
          fontTexture: './Roboto-msdf.png'
        }
      ]}>
      <Title accentColor={accentColor} />
      <Button onClick={() => accentColor.offsetHSL(1 / 3, 0, 0)} />
    </block>
  )
}

// function Thing() {
//   const ref = useRef()
//   useFrame(() => (ref.current.rotation.y += 0.01))
//   return (
//     <TorusKnot ref={ref} args={[1, 0.3, 128, 16]}>
//       <meshNormalMaterial />
//     </TorusKnot>
//   )
// }
