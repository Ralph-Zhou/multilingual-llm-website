// Load paper list statistic
all_paper = []
texts_root = document.getElementById('texts-root').innerHTML

/*
$.get(texts_root + '/paperlist.csv', function (data) {
    all_paper = $.csv.toObjects(data);
    render_statistic(all_paper)
});
*/
$.get(texts_root + '/new-mllm-paperlist.csv', function (data) {
    all_paper = $.csv.toObjects(data);
    render_statistic(all_paper)
});

function render_statistic(paperlist) {
    ctx = document.getElementById('trends');
    labels = [2020, 2021, 2022, 2023]
    names = ['Parameter-Tuned Alignment', 'Parameer-Frozen Alignment']
    types = ['PTA', 'PFA']
    datasets = []
    for (let i = 0; i < 2; i++) {
        n = names[i]
        t = types[i]
        data = [0, 0, 0, 0]
        for (let j = 0; j < paperlist.length; j++) {
            const paper = paperlist[j];
            for (let k = 0; k < labels.length; k++) {
                if (paper.time != "")
                {
                    if (labels[k] == parseInt(paper.time) && paper.type == t) {
                        data[k] += 1
                    }
                }
            }
        }
        datasets.push({
            label: n,
            data: data,
            fill: true,
            tension: 0.1
        })
    }

    config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        }
    };
    new Chart(ctx, config);
}


document.getElementById("default-tab").click();

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function search_nickname(name) {
    for (let i = 0; i < all_paper.length; i++) {
        const paper = all_paper[i];
        if (paper.nickname.toLowerCase() == name.toLowerCase()) {
            return paper
        }
    }
    console.log("cannot find paper with nickname " + name)
    return null
}

function addHTML(id, content) {
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.concat(content)
}

