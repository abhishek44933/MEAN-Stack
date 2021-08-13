

function addNewBlog() {
    var blogTitle = document.getElementById("blogTitle").value;
    var authorName = document.getElementById("authorName").value;
    var blogContent = document.getElementById("blogContent").value;
    var date = getDate();


    if (blogTitle == "" || authorName == "" || blogContent == "") {
        alert("please fill the required information");
    } else {

        var target = document.getElementById("wholeContent");
        target.innerHTML +=

            ` <SECtion>

    <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="blog-item ">
            <div class="row align-items-center">
                <img src="images/empty-profile-pic.jpg" class="col-1 rounded-circle" alt="empty-profile-pic">

                <div class="col-9">
                    <h2 class="author-name">${authorName}</h2>
                    <h4 class="post-date">${date}</h4>
                </div>

            </div>

            <hr>

            <div>
                <h1 class="row blog-title">${blogTitle}</h1>

                <p class="blog-content">
                   ${blogContent}
                </p>
            </div>
        </div>

    </div>

</SECtion>`;


        document.getElementById("blogTitle").value = "";
        document.getElementById("authorName").value = "";
        document.getElementById("blogContent").value = "";

    }



}

function getDate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}


