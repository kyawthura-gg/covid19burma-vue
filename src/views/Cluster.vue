<template>
  <div>
    <div class="message is-warning" style="margin: 70px">
      <div class="message-body">
        <strong>Last Updated:</strong> 16 May 2020. Due to high number of confirmed cases, we are unable to collect data.
      </div>
    </div>
    <div class="content" id="cluster-canvas" style="width: 100%;height:600px;"></div>
  </div>
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
          tooltip: {
            show: true,
            mode: "single",
            formatter: params => {
              var data = params.data;
              var gender = "Female";
              var htmlTag = "";
              if (data.case !== "undefined") {
                if (data.category === 0) gender = "Male";
                htmlTag =
                  "Case Number: " +
                  data.case +
                  "<br />Age: " +
                  data.age +
                  "<br />Gender: " +
                  gender;
              }

              return htmlTag;
            }
          },
          legend: {
            data: ["Male", "Female", "Unknown"]
          },
          animationDuration: 500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              // name: "Patient to Patient Link Graph",
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
                edgeLength: 10,
                repulsion: 50,
                gravity: 0.2
              },
              edges: webkitDep.links
              // lineStyle: {
              //   color: "#fff",
              //   curveness: 0
              // }
            }
          ]
        };
        myChart.setOption(option);
      });
    }
  }
};
</script>
