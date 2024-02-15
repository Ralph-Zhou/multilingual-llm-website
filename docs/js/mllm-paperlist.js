type = document.getElementById('type').innerHTML
texts_root = document.getElementById('texts-root').innerHTML
$.get(texts_root + '/new-mllm-paperlist.csv', function (data) {
    obj = $.csv.toObjects(data);
    print_paper(obj, type)
});

formal_name = {
    pretraining: 'Pretraining Alignment',
    sft: 'SFT Alignment',
    rlhf: 'RLHF Alignment',
    finetuning: 'Finetuning Alignment',
    direct: 'Direct Prompting',
    cross_lingual: 'Cross-lingual Thinking Prompting',
    code_switching: 'Code-Switching Prompting',
    translation: 'Translation Alignment Prompting',
    retrieval: 'Retrieval Augmented Alignment'
}

function print_paper(paperlist, type) {
    console.log(obj)
    console.log(type)
    paper_dict = {
        PTA: {
            sft: [],
            pretraining: [],
            rlhf: [],
            finetuning: []
        },
        PFA: {
            direct: [],
            cross_lingual: [],
            code_switching: [],
            translation: [],
            retrieval: []
        }
    }
    // console.log(paper_dict[type])
    let target_paper_dict = paper_dict[type];
    for (let i = 0; i < paperlist.length; i++)
    {
        const paper = paperlist[i]
        let target_subtype = paper.subtype
        if (paper.type == type)
        {
            if (!target_paper_dict.hasOwnProperty(target_subtype))
            {
                console.error(`Error: subtype name '${target_subtype}' is wrong.`);
            }
            else 
            {
                target_paper_dict[paper.subtype].push(paper);
            }
        }
    }
    console.log(target_paper_dict)

    for (let subtype in target_paper_dict)
    {
        target_paper_dict[subtype].sort((a, b) => {
            const yearA = parseInt(a.time, 10);
            const yearB = parseInt(b.time, 10);
            return yearB - yearA;
        });
        addHTML("mllm-paperlist", "</ul><h2>" + formal_name[subtype] + "</h2><ul>")
        sub_paper_list = target_paper_dict[subtype];
        let year = 2100
        for (let i = 0; i < sub_paper_list.length; i++)
        {
            let paper = sub_paper_list[i]
            // console.log(paper)
            if (parseInt(paper.time) < year) 
            {
                year = parseInt(paper.time)
                addHTML("mllm-paperlist", "</ul><h3>" + year + "</h3><ul>")
            }
            item_html = `<li><i><b>${paper.title}</b></i>, ${paper.author}. <code>${paper.conference}${paper.time}</code>`
            if (paper.paperlink != "") 
            {
                item_html += `<a href="${paper.paperlink}"><i class="bi bi-file-earmark-pdf"></i></a>`
            }
            if (paper.codelink != "") 
            {
                item_html += `<a href="${paper.codelink}"><i class="bi bi-github"></i> </a>`
            }
            item_html += `</li>`
            addHTML("mllm-paperlist", item_html)
        }
    }
}


function addHTML(id, content) {
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.concat(content)
}