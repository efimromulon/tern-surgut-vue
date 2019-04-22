<template>
    <div ref="heatmapChart" class="heatmap-chart-container"></div>
</template>

<script>
    import Konva from 'konva';
    export default {
        name: 'heatmap-chart',
        props: ['chartData'],
    data: function data() {
        return {
           stage: null
        };
    },


    computed: {

    },
    methods: {  
        drawChart() {
            
          
            var chartData = this.chartData
            var datesArray = [];
            var max = 0;

            for (let i = 0; i < chartData.data.length; i++) {

                if(chartData.data[i].value > max) {
                    max = chartData.data[i].value
                }

                datesArray.push(chartData.data[i].date);
               
            }

            var container = this.$refs.heatmapChart;
            var width = container.offsetWidth;
            
            var blockSnapSize = width / (chartData.data.length + 2);
            var height = container.offsetHeight - blockSnapSize;         
            var stage = this.stage;

            if(!stage) {
                stage = new Konva.Stage({
                    container,
                    width,
                    height
                })
            } else {
                stage.destroyChildren()
            }
            
            var layer = new Konva.Layer();


    

            
    
            function drawLines(points) {                
              
                var line = new Konva.Line({
                    points,
                    stroke: '#6200ee',
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round'
                })


                layer.add(line)

            }

            function addLabel(coords,text,rotation) {
                rotation ? rotation : 0
                var text = new Konva.Text({
                    x: coords[0],
                    y: coords[1],
                    align: 'center',
                    fontSize: blockSnapSize / 5,
                    text,
                    rotation,
                })
                layer.add(text)
            }

            function drawEventLine(event) {

                var index = datesArray.indexOf(event.date)

                var eLine = new Konva.Line({
                    points:[ blockSnapSize + (blockSnapSize * index), blockSnapSize, blockSnapSize + (blockSnapSize * index), height - blockSnapSize ],
                    stroke: '#b4453b',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                    dash: [blockSnapSize / 6, blockSnapSize / 12]
                })
                layer.add(eLine)

                addLabel(
                    [ (blockSnapSize * index )+ (blockSnapSize * 0.75),
                    (height - ( blockSnapSize * 1.5 )) ],
                    "Обновление: " + event.type,
                    -90
                )
            }

            (function drawAxisLines() {
                var xLine = new Konva.Line({
                    points:[ blockSnapSize, height - blockSnapSize, width - (blockSnapSize * 2), height - blockSnapSize ],
                    stroke: '#353535',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round'
                })

                var yLine = new Konva.Line({
                    points:[ blockSnapSize, blockSnapSize, blockSnapSize, height - blockSnapSize ],
                    stroke: '#353535',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round'
                })

                addLabel([
                    blockSnapSize / 2,  blockSnapSize - (blockSnapSize * 0.1) 
                ], max)

                if (max != 1) {
                    addLabel([
                        blockSnapSize / 2, (height  / 2) - (blockSnapSize * 0.1)
                    ], Math.ceil( max/2) )
                }
                

                addLabel([
                    blockSnapSize / 2, height - (blockSnapSize * 1.1)
                ],  0)




                layer.add(xLine)
                 layer.add(yLine)
            })()
            
     
           

            var resultArr = [];
            var tempArr = [];

            for (let i = 0; i < chartData.data.length; i++) {
                let data = chartData.data[i];
                let heightPoint = (height -( 2 * blockSnapSize)) / max;

                if(data.value === 0 || data.value) {

                    let dx =  blockSnapSize + (blockSnapSize * i)
                    let dy =  height - (blockSnapSize + ( heightPoint * data.value) )
                    tempArr.push(dx)
                    tempArr.push(dy)

                    addLabel([dx , height - (blockSnapSize * 0.75)], data.date,
                    35)

                } else {
                    resultArr.push(tempArr);
                    tempArr = []
                    addLabel(
                        [blockSnapSize + (blockSnapSize * i), height - (blockSnapSize * 0.75)]
                        , data.date,
                        35)
                    
                }

            }

            if (resultArr.length > 0 && typeof resultArr[0] === "object") {
                resultArr.push(tempArr);

                resultArr.forEach(subArr => {
                    drawLines(subArr)
                })
  
            } else {
                drawLines(tempArr)
            }

            chartData.events.forEach(event => drawEventLine(event))
            
      
           
            stage.add(layer)
            this.stage = stage;
            // console.log(max,x,y)

        }
    },


    watch: {
        chartData() {
            if (this.stage) {
                this.stage.clear();
            }
           this.drawChart();
        }
    },
    mounted(){
        if (this.stage) {
            this.stage.clear();
        }
        this.drawChart();
     
    }
    }
</script>

<style scoped lang="sass">
.heatmap-chart-container
    width: 100%
    height: 100%

</style>