import React, {useEffect, useState, useRef} from 'react'
import dynamic from 'next/dynamic'
import { select, hierarchy, tree, linkVertical, forceSimulation } from "d3"
import json from './lang'

const Page = (props) => {
	const svgRef = useRef();
	useEffect(() => {
		const svg = select(svgRef.current);
		const root = hierarchy(json)
		const treeLayout = tree().size([1700, 600])
		treeLayout(root)


		const linkGenerator = linkVertical()
		.x(node => node.x)
		.y(node => node.y + 100)

		svg
		.selectAll(".node")
		.data(root.descendants())
		.join("circle")
		.attr("class", "node")
		.attr("r", 5)
		.attr("fill", "grey")
		.attr("cx", node => node.x)
		.attr("cy", node => node.y + 100)

		svg
		.selectAll(".link").data(root.links())
		.join("path").attr("class","link")
		.attr("fill", "none")
		.attr("stroke", "grey")
		.attr("d", linkGenerator)

		svg
		.selectAll(".label")
		.data(root.descendants())
		.join("text")
		.attr("class", "label")
		.attr("fill", "black")
		.text(node => node.data.language)
		.attr("font-size", 16)
		.attr("text-anchor", "middle")
		.attr("x", node => node.x)
		.attr("y", node => node.y + 85)

	}, [])

return (
	<React.Fragment>
		<svg ref={svgRef}  width='2000px' height='2000px'></svg>
		<br/>
		<button onClick={() => setData(data.map(value => value + 5))}>
		Update
		</button>
	</React.Fragment>
 )

}

export default Page
