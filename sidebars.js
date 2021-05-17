module.exports = {
  adminMode: {
    Administration: [
      "admin-mode/intro",
      "admin-mode/welcome",
      "admin-mode/user-group",
      {
        type: "category",
        label: "ABRT Platform",
        items: ["admin-mode/admin",       
          {
            type: "category",
            label: "My Organization",
            items: [
              "admin-mode/reports",
              "admin-mode/segment",
              "admin-mode/contact",
              "admin-mode/user-access",
            ],
          },
          "admin-mode/upload-report",
          "admin-mode/activity",
          "admin-mode/reviews",
          "admin-mode/metrics",
          "admin-mode/issue",
        ],
      },
    ],
  },

  userMode: {
    "BI Platform": ["user-mode/welcome", "user-mode/abrt", "user-mode/abrt-mobile","user-mode/contact-us"],
  },
};
