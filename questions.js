const questions = [
    {
        type:"input",
        message:"Project title:",
        name:"title"
    },
    {
        type:"input",
        message:"Project description:",
        name:"description"
    },
    {
        type:"input",
        message:"Installation:",
        name:"installation"
    },
    {
        type:"input",
        message:"Usage:",
        name:"usage"
    },
    {
        type:"input",
        message:"Contributing:",
        name:"contributing"
    },
    {
        type:"input",
        message:"Tests:",
        name:"tests"
    },
    {
        type:"list",
        message:"License:",
        name:"license",
        choices:["CC","ISC", "MIT", "Unlicense"]
    },
    {
        type:"input",
        message:"Github:",
        name:"github"
    },
    {
        type:"input",
        message:"Email:",
        name:"email"
    }
]

module.exports = {
    questions:questions
}