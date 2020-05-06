import { Object3D, BoxBufferGeometry, TextureLoader, MeshStandardMaterial, Mesh } from 'three'

export default class Oggetto extends Object3D {
  constructor() {
    super()

    const texture1 = new TextureLoader().load('src/texture/legno.jpg');
    const texture2 = new TextureLoader().load('src/texture/norm.jpg');

    // immediately use the texture for material creation
    const material = new MeshStandardMaterial({ map: texture1, normalMap: texture2, roughness: 0.1, metalness: 0.1 });

    const geometry = new BoxBufferGeometry(3, 3, 3);
    //const material = new MeshStandardMaterial({ color: 0xA197C9, roughness: 0.18, metalness: 0.5 })
    const mesh = new Mesh(geometry, material);

    //const geometry = new TorusKnotBufferGeometry(2, 0.25, 100, 16)
    //const material = new MeshStandardMaterial({color: 0xA197C9, roughness: 0.18, metalness: 0.5})
    //const mesh = new Mesh(geometry, material)

    this.add(mesh)
  }
}
