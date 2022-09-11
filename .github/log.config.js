module.exports = {
    types: [
        {
            types: ["feat", "feature"],
            label: "🎉 New Features",
        },

        {
            types: ["fix", "bugfix"],
            label: "🔧 Bug Fixes",
        },

        {
            types: ["improvement", "perf", "enhancement", "refactor"],
            label: "⏫ Improvements",
        },
    ],

    excludeTypes: [
        "build", "ci",
        "other", "misc",
        "chore", "style",
        "progress", "prog",
        "doc", "docs"
    ]
}