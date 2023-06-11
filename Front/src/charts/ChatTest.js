import CanvasJSReact from "../canvasjs.react";
import React from "react";
import Axios from "axios";

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ChartTest extends React.Component {
    componentDidMount(){
            
        Axios.get('http://localhost:5000/absences')
            .then(res => {
                console.log("res.data",res.data.data);

                //  var f1= res.data.data.filter(elm => elm.id_Filiere === 1);
                //     var f2 = res.data.data.filter(elm => elm.id_Filiere === 2);
                //     var f3 = res.data.data.filter(elm => elm.id_Filiere === 3);
                //     var f4 = res.data.data.filter(elm => elm.id_Filiere === 4);
                //     var f5 = res.data.data.filter(elm => elm.id_Filiere === 5);
                // console.log('zZz',f1.length, f2.length,f3.length, f4.length, f5.length)
                // var r1= f1.length;
                // var r2 = f2.length;
                // var r3 = f3.length;
                // var r4 = f4.length;
                // var r5 = f5.length;
                // console.log('ziiiiiiiiiiiiiiiiiiiiz',r1, r2, r3, r4, r5)

               
                var tab = [
                    { x: new Date(2020, 6,1), y: 1 },
					{ x: new Date(2020, 6,2), y: 4 },
					{ x: new Date(2020, 6,3), y: 3 },
					{ x: new Date(2020, 6,4), y: 6 },
					{ x: new Date(2020, 6,5), y: 5 },
					{ x: new Date(2020, 6,6), y: 9 },
					{ x: new Date(2020, 6,7), y: 7 },
                ]
                this.setState({
                options: { data: [{ dataPoints: tab }] }
    })
  })
  .catch((error) => {
    console.log(error);
  })

        
    }
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: ""
			},
			axisX: {
				valueFormatString: "DDDD"
			},
			axisY: {
				title: "Nombre d'absence",
				
				includeZero: false
			},
			data: [{
				yValueFormatString: "#,###",
				xValueFormatString: "DDDD",
				type: "spline",
				dataPoints: [
					{ x: new Date(2020, 6,1), y: 1 },
					{ x: new Date(2020, 6,2), y: 4 },
					{ x: new Date(2020, 6,3), y: 3 },
					{ x: new Date(2020, 6,4), y: 6 },
					{ x: new Date(2020, 6,5), y: 5 },
					{ x: new Date(2020, 6,6), y: 9 },
					{ x: new Date(2020, 6,7), y: 7 },
					
				]
			}]
        }
        
		return (
		<div>
            <b>Variation de l'absence durant la semaine</b>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default ChartTest; 