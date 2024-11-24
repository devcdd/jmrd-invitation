import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CSSProperties, useEffect, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

interface VolumetricCanvas {
  style?: CSSProperties;
}

const Model = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    // // MTLLoader를 사용하여 MTL 파일 로드
    // const mtlLoader = new MTLLoader();
    // mtlLoader.load("/Compass.mtl", (materials) => {
    //   materials.preload(); // 재질 준비
    //   // OBJLoader를 사용하여 OBJ 파일 로드
    //   const objLoader = new OBJLoader();
    //   objLoader.setMaterials(materials);
    //   objLoader.load("/Compass.obj", (object) => {
    //     // 모델 크기 조정 (2배 크기로 설정)
    //     object.scale.set(1.7, 1.7, 1.7);
    //     setModel(object);
    //   });
    // });

    // const gltfLoader = new GLTFLoader();
    // gltfLoader.load("/Compass.glb", (gltf) => {
    //   setModel(gltf.scene);
    // });

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); // Draco 디코더 파일 경로 설정

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader); // GLTFLoader에 DRACOLoader 설정

    gltfLoader.load("/JMRDTshirt.glb", (gltf: any) => {
      const scene = gltf.scene;
      scene.scale.set(1.2, 1.2, 1.2); // 모델 크기 조정 (2배 크기로 설정
      scene.position.y -= 2; // 하단으로 이동
      // scene.rotation.z = -5;
      // 모델의 모든 메쉬에 대해 재질 속성 조정

      setModel(scene);
    });

    return () => {
      // 메모리 누수를 방지하기 위해 청소
      dracoLoader.dispose();
    };
  }, []);

  return model ? <primitive object={model} /> : null; // 모델이 로드되면 렌더링
};

const VolumetricCanvas = (props: VolumetricCanvas) => {
  return (
    <Canvas style={props.style}>
      <OrbitControls autoRotate={true} enableZoom={true} />
      <ambientLight intensity={1} />
      <directionalLight intensity={100} />
      <Model /> {/* 로드한 모델 추가 */}
    </Canvas>
  );
};

export default VolumetricCanvas;
