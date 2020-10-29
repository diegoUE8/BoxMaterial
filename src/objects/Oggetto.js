import { Object3D, BoxBufferGeometry, TextureLoader, MeshStandardMaterial, Mesh, DataTexture3D } from 'three'

export default class Oggetto extends Object3D {
  constructor() {
    super()

    const texture1 = new TextureLoader().load('src/texture/wood_burma_padauk_basecolor.png');
    const texture2 = new TextureLoader().load('src/texture/wood_burma_padauk_normal.png');
    const texture3 = new TextureLoader().load('src/texture/wood_burma_padauk_height.png');
    const texture4 = new TextureLoader().load('src/texture/wood_burma_padauk_normal.png');

    // immediately use the texture for material creation
    const material = new MeshStandardMaterial({ map: texture1, normalMap : texture2, alphaMap: texture3, bumpMap: texture4});

    const geometry = new BoxBufferGeometry(4, 4, 4);
    //const material = new MeshStandardMaterial({ color: 0xA197C9, roughness: 0.18, metalness: 0.5 })
    const mesh = new Mesh(geometry, material);

    //const geometry = new TorusKnotBufferGeometry(2, 0.25, 100, 16)
    //const material = new MeshStandardMaterial({color: 0xA197C9, roughness: 0.18, metalness: 0.5})
    //const mesh = new Mesh(geometry, material)

    this.add(mesh)
  }
}
