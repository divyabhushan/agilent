module.exports = {
  someSidebar: {
    "Getting Started": ["doc1", "welcome", "terms"],
  },

  adminMode: {
    Administration: [
      "admin-mode/doc3",
      {
        type: "category",
        label: "ABRT Platform",
        items: [
          "admin-mode/activity",
          {
            type: "category",
            label: "My Organization",
            items: ["admin-mode/reports", "admin-mode/segment"],
          },
          "admin-mode/reviews",
          {
            type: "category",
            label: "Metrics",
            items: ["admin-mode/reports", "admin-mode/segment"],
          },
          "admin-mode/issue",
        ],
      },
    ],
  },

  userMode: {
    "User Mode": [
      {
        type: "category",
        label: "BI Platform",
        items: [
          {
            type: "category",
            label: "ABRT Reports",
            items: ["user-mode/add-edit-report"],
          },
        ],
      },
      "user-mode/dummy",
    ],
  },
};
