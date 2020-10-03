const questions = [
    {
        type:"input",
        message:"Project title",
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
        type:"input",
        message:"Questions:",
        name:"questions"
    },
    {
        type:"list",
        message:"License:",
        name:"license",
        choices:["MIT", "GPLv3", "GPL", "CC-0"]
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