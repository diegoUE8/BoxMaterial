import { Object3D, TorusGeometry, MeshBasicMaterial, Mesh } from 'three'

export default class Torus extends Object3D {
  constructor () {
    super()

    const geometry = new TorusGeometry( 10, 3, 16, 100 );
    const material = new MeshBasicMaterial( { color: 0xffff00 } );
    const mesh = new Mesh(geometry, material)

    this.add(mesh)
  }
}
