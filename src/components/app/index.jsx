import React, {useEffect, useState} from 'react'
import useDraggable from '../../hooks/use-draggable'
import TilePalette from '../../components/tile-palette'
import Map from '../map'

import spring from '../../assets/rpg-map-maker-resources-master/sprites/rpg-nature-tileset/spring.png'
import winter from '../../assets/rpg-map-maker-resources-master/sprites/rpg-nature-tileset/winter.png'
import fall from '../../assets/rpg-map-maker-resources-master/sprites/rpg-nature-tileset/fall.png'

import serene from '../../assets/SERENE_VILLAGE_REVAMPED/Serene_Village_32x32.png'



export default function App() {
  const [activeTile, setActiveTile] = useState({
    x:1 * 32,
    y:4 *32
  })
  const [tileset, setTileset] = useState(serene)
  const [tiles, setTiles] = useState([])
  const [mapSize, setMapSize] = useState({
    width: 800,
    height: 600,
  });
  const {position} = useDraggable("handle")




  useEffect(() => {
    const _tiles = []
    let id = 0

    for (let y = 0; y < mapSize.height; y = y + 32) {
      const row = []
      for (let x = 0; x < mapSize.width; x= x + 32) {
        row.push({
          x, 
          y, 
          id: id, 
          v:{ x: -32, y: -32},
        });
      }
      _tiles.push(row);
    }
    setTiles(_tiles);
  }, [])
  

  return (
    <div
    style={{
      position: "relative",
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 'grey',
      overflow: "hidden",
      border: '1 px solid black',
    }}
    >
      <TilePalette
      tileset={tileset}
      activeTile={activeTile}
      setActiveTile={setActiveTile}
      position={position}
      size={{width: 640, height: 288,}}
      />

      <Map
      size={mapSize}
      tiles={tiles}
      tileset={tileset}
      activeTile={activeTile}
      setTiles={setTiles}
      />
    </div>
  )
}
