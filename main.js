function toMD(content) {
    const md = window.markdownit({
        html: true, // Enable HTML tags in source
        breaks: true, // Convert '\n' in paragraphs into <br>
    });

    // Convert content to Markdown format
    return md.render(content);
}

const searchInput = bycss("input");
const titleReader = bycss("article");
const contributionBtn = byid("edit-page");

focusLabelAsInput(bycss("label"));
enableLabelResetBtns();
enableBtnsClickAnim();

const topics = ["time", "productivity", "psychology", "programming"];

var curSubject = topics[0];

searchInput.addEventListener("input", (event) => {
    searchForTitle(event.target.value);
});
searchInput.addEventListener("focus", (event) => {
    searchForTitle(event.target.value);
});

let subjectsMenuHTML = "";
for (let c of topics) {
    subjectsMenuHTML += `
    <option value="${c}">
        ${c}
    </option>
    `;
}
bycss("select").innerHTML = subjectsMenuHTML;
bycss("select").addEventListener("change", changeSubject);

changeSubject("time");

function searchForTitle(targetTitle) {
    let newHTML = "";
    if (targetTitle) {
        let suggestions = [];
        let selectedTitles = [];
        switch (curSubject) {
            case "time":
                selectedTitles = timeTitles;
                break;
            case "productivity":
                selectedTitles = intellectTitles;
                break;
            case "psychology":
                selectedTitles = othersTitles;
                break;
            case "programming":
                selectedTitles = programmingTitles;
                break;
        }
        for (let t of selectedTitles) {
            if (targetTitle == "*") {
                suggestions.push(t);
                continue;
            }
            if (t.length >= targetTitle.length) {
                if (t.toLowerCase().includes(targetTitle.toLowerCase())) {
                    suggestions.push(t);
                }
            }
        }
        // sort results by beginning, then size
        suggestions.sort((a, b) => {
            return (
                a.slice(0, targetTitle.length).toLowerCase() ==
                targetTitle.toLowerCase()
            );
        });
        suggestions.sort((a, b) => {
            return a.length - b.length;
        });
                
        for (let s of suggestions) {
            newHTML += `
            <span onclick="readTitle(\`${s}\`)" class="pad-12">
                ${s}
            </span>
            `;
        }
        newHTML = `<i>${suggestions.length} results</i>` + newHTML;
    } else {
        newHTML += `
        <button onclick="searchForTitle('*')" class="labeled onsurface bordered">Show all</button>
        `;
    }
    byid("results").innerHTML = newHTML;
}

function clearSearch() {
    searchInput.value = "";
    searchForTitle("");
    searchInput.focus();
}

function readTitle(targetTitle) {
    fetch(curSubject + "/" + targetTitle.toLowerCase() + ".md")
        .then((response) => response.text())
        .then((text) => {
            show(contributionBtn);
            contributionBtn.onclick = () => {
                location.href =
                    "https://github.com/ssiyo/project720/blob/main/" +
                    curSubject +
                    "/" +
                    targetTitle.toLowerCase() +
                    ".md";
            };
            titleReader.innerHTML = toMD(text);
            titleReader.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        })
        .catch((error) => {
            console.error("Error fetching file:", error);
        });
    clearSearch();
    searchInput.blur();
}

function changeSubject() {
    curSubject = bycss("select").value;
    searchForTitle("");
}
