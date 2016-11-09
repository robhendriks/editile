class Tile {
  constructor (x, y, type) {
    this.x = x
    this.y = y
    this.type = type
    this.selected = false
  }
}

Tile.WIDTH = 32
Tile.HEIGHT = 32

exports.Tile = Tile
