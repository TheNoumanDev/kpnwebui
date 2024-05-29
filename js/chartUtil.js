var chartUtil = {
    instances: [],
    getChart (id) {
        var chartVar = 'myChart_'+id;
        var index = this.instances.indexOf(chartVar);
        if ( index == -1 ) {
            return null;
        }
        return this.instances[index];
    },
    instantiate(id,config) {
        var chartVar = 'myChart_'+id;
        var index = this.instances.indexOf(chartVar);
        if ( index != -1 ) {
           this.instances[index].destroy();
           this.instances.splice(index,1);
        }
        chartVar = new Chart(document.getElementById(id), config);
        chartVar.update();
        this.instances.push(chartVar);
    },
    addLabels(id,labels) {
        var chart = getChart(id);
        if ( !chart ) {
          alert('chart with id'+id+ ' does not exist');
        }
        chart.data.labels.push(...labels);
    },
    addData(id, dataSetIndex, data) {
        var chart = getChart(id);
        if ( !chart ) {
            alert('chart with id'+id+ ' does not exist');
        } else if ( dataSetIndex >= chart.data.datasets.length ) {
            alert('chart with id='+id+' only has '+chart.data.datasets.length+' datasets.');
        } else {
            chart.data.datasets[dataSetIndex].data.push(...data);
        }
    },
    update(id) {
        var chart = getChart(id);
        if ( !chart ) {
            alert('chart with id'+id+ ' does not exist');
        } else {
            chart.update();
        }
    }

};