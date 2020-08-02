<template>
  <div class="content" id="cluster-canvas" style="width: 100%;height:600px;"></div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.loadCluster();
  },
  methods: {
    loadCluster() {
      var myChart = echarts.init(document.getElementById("cluster-canvas"));
      $.get("graph.json", function(webkitDep) {
        var option = {
          tooltip: {},
          title: {
            text: "Patient to Patient Link Graph",
            subtext: "Default layout",
            top: "bottom",
            left: "right"
          },
          legend: {
            data: ["Male", "Female", "Unknown"]
          },
          animationDuration: 1500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              name: "Patient to Patient Link Graph",
              type: "graph",
              layout: "force",
              animation: false,
              label: {
                position: "right",
                formatter: "{b}"
              },
              roam: true,
              focusNodeAdjacency: true,
              draggable: false,
              data: webkitDep.nodes.map(function(node, idx) {
                node.id = idx;
                return node;
              }),
              categories: webkitDep.categories,
              force: {
                edgeLength: 5,
                repulsion: 40,
                gravity: 0.2
              },
              edges: webkitDep.links,
              lineStyle: {
                color: "source",
                curveness: 0
              }
            }
          ]
        };
        myChart.setOption(option);
      });
    }
  }
};
</script>
