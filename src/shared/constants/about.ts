import { AboutInfo } from "../ts/interfaces/about";
import { AboutInfoTypes } from "../ts/types/about";

export const ABOUT_INFORMATION: Record<AboutInfoTypes, AboutInfo> = {
  about: {
    description:
      "MahBlog is personal blogging platform designed for users to share their knowledge, insights, and experiences. Whether you’re writing about an interesting topic, documenting your learning journey, or simply sharing your thoughts, MahBlog is the perfect place for you.",
    lists: [
      {
        header: "Our Key Features",
        descriptions: [
          "Our main purpose is to facilitate the sharing of knowledge. By writing and sharing your blog posts, you have the potential to inspire and educate others, making a positive impact on their lives.",
          "Use MahBlog to document your personal learning journey, express your ideas, and keep a record of your thoughts and experiences.",
          "Engage with a community of like-minded individuals. Connect with others, comment on blog posts, and participate in discussions to build meaningful interactions.",
        ],
      },
    ],
    footer:
      "Join MahBlog today and start sharing your knowledge. You never know, your post might just make someone’s day!",
  },

  "privacy-policy": {
    header: "Privacy Policy",
    effectiveDate: "June 17, 2024",
    description:
      "At MahBlog, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By using MahBlog, you agree to the collection and use of information in accordance with this policy.",
    lists: [
      {
        header: "Information We Collect",
        descriptions: [
          "Personal Information: When you register, we collect your first name, last name, and email address. We also collect your password, which is stored in a hashed format.",
          "Content Information: We collect the information you provide when you create blogs, including text and images.",
          "Usage Information: We may collect information about your interactions with the platform, such as the content you view and the actions you take.",
        ],
      },
      {
        header: "How We Use Your Information",
        descriptions: [
          "Account Management: To create and manage your account, provide customer support, and communicate with you.",
          "Content Delivery: To display your blogs and user interactions on the platform.",
          "Security: To maintain the security and integrity of our platform.",
          "Improvement and Development: To analyze usage patterns and improve our services.",
        ],
      },
      {
        header: "Sharing Your Information",
        descriptions: [
          "Legal Requirements: If required by law or in response to legal process.",
          "Protection: To protect the rights, property, or safety of MahBlog, our users, or others.",
        ],
      },
      {
        header: "Your Rights",
        descriptions: [
          "You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at magbualmarcel@gmail.com",
        ],
      },
      {
        header: "Data Security",
        descriptions: [
          "We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.",
        ],
      },
      {
        header: "Changes to This Policy",
        descriptions: [
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
        ],
      },
    ],
  },

  "terms-of-service": {
    header: "Terms of Service",
    effectiveDate: "June 17, 2024",
    description:
      "By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.",
    lists: [
      {
        header: "Accounts",
        descriptions: [
          "Registration: To use our services, you must register and create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
          "Accuracy: You agree to provide accurate and complete information when creating your account.",
        ],
      },
      {
        header: "User Content",
        descriptions: [
          "Ownership: You retain ownership of the content you create on MahBlog. By posting content, you grant us a license to use, display, and distribute your content on our platform.",
          "Responsibility: You are responsible for the content you post and for ensuring it complies with our guidelines and applicable laws.",
        ],
      },
      {
        header: "Prohibited Activities",
        descriptions: [
          "Misuse: You agree not to misuse our services, including but not limited to spamming, hacking, or violating the privacy of others.",
          "Illegal Content: You must not post content that is illegal, harmful, or offensive.",
        ],
      },
      {
        header: "Termination",
        descriptions: [
          "We reserve the right to terminate or suspend your account at any time for violating these Terms of Service or for any other reason at our discretion.",
        ],
      },
      {
        header: "Limitation of Liability",
        descriptions: [
          `MahBlog is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our platform.`,
        ],
      },
      {
        header: "Changes to These Terms",
        descriptions: [
          "We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page.",
        ],
      },
    ],
  },

  "cookies-policy": {
    header: "Cookies Policy",
    description:
      "We use cookies to enhance your experience on our platform. This Cookies Policy explains how we use cookies and your choices regarding them.",
    effectiveDate: "June 17, 2024",
    lists: [
      {
        header: "What Are Cookies?",
        descriptions: [
          "Cookies are small text files stored on your device by your web browser. They are used to remember your preferences and activity on a website",
        ],
      },
      {
        header: "Types of Cookies We Use",
        descriptions: [
          "Essential Cookies: These cookies are necessary for the operation of our website. They include cookies that store your access token for authentication purposes.",
        ],
      },
      {
        header: "How We Use Cookies",
        descriptions: [
          "Authenticate Users: To keep you logged in and secure your session.",
          "Improve Performance: To analyze and improve the performance of our website.",
        ],
      },
      {
        header: "Your Choices",
        descriptions: [
          "You can control and manage cookies through your browser settings. However, please note that disabling cookies may affect the functionality of MahBlog.",
        ],
      },
      {
        header: "Changes to This Policy",
        descriptions: [
          "We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.",
        ],
      },
    ],
  },

  "contact-us": {
    header: "Contact us",
    description:
      "If you have any questions about Privacy, Cookies Policy and Terms of Service. please contact us at magbualmarcel@gmail.com",
    lists: [],
  },
};
