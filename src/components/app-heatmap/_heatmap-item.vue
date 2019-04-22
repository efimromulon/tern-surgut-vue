<template>
     <div class="heatmap-item" :style="cSttyle" >
               <p class="heatmap-item-text">{{ name[0]  }}</p>
               <p class="heatmap-item-text">{{ name[1]  }}</p>
        </div>
</template>

<script>
    export default {
        props: ['oData','color','selected','highlighted'],
    data: function data() {
        return {
            testInterval: null
        };
    },


    computed: {
        cSttyle(){
            var colornum = this.color ? this.color.split("(")[1].split(")")[0].split(',')[0] : [255, 255, 255];
            
            var tempVal = colornum > 120 ? 32 : 235;
            var textColor = "rgb(" + tempVal + "," + tempVal + "," + tempVal + ")";

            let styleObject = {
                'backgroundColor': this.color,
                'opacity': '1',
                'outline': 'none',
                'outlineOffset': '0',
                'color': textColor
            }

            if (this.selected) {
                styleObject['opacity'] = '1'              
            } else {
                styleObject['opacity'] = '0.2'
            }

            if (this.highlighted) {
                styleObject['box-shadow'] = '0 0 3pt 2pt #6200ee'  
            } else {
                styleObject['box-shadow'] = 'none'     
            }

            return styleObject
        },
        name() {
            return this.oData.sDisplayName.split(" ")
        }
    },
    watch: {
        color(val,oldVal) {
            if(val !== oldVal) {
               
            }           
        }
    }
    }
</script>

<style scoped lang="sass">
.heatmap-item
    flex: none
    width: calc( (80vw - 64px - 6em) / 20)
    height: calc( (80vw - 64px - 6em) / 20)
    margin: .25vh
    transition: background-color cubic-bezier(.62,.28,.23,.99) 600ms, opacity cubic-bezier(.62,.28,.23,.99) 600ms, color cubic-bezier(.62,.28,.23,.99) 600ms
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    border-radius: 4px
    @include shadow(2)
.heatmap-item-text
    font-size: 0.9em
</style>