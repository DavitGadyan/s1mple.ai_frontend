// components/S1mpleChatWithIntegrations.jsx
import React, { useState, useEffect } from 'react';
import Chat from "@/components/Chat";

// --- Example custom message components (optional) ---
// import { CustomAssistantMessage } from './CustomAssistantMessage';
// import { CustomUserMessage } from './CustomUserMessage';
// import { CustomMessages } from './CustomMessages';
// import { CustomRenderTextMessage } from './CustomRenderTextMessage';
// import { CustomInput } from './CustomInput';

const integrations = [
  { name: 'Gmail', logo: 'https://www.gstatic.com/images/branding/product/1x/gmail_512dp.png' },
  { name: 'Calendar', logo: 'https://www.gstatic.com/images/branding/product/1x/calendar_512dp.png' },
  { name: 'Google Trends', logo: 'https://www.gstatic.com/images/branding/product/1x/trends_512dp.png' },
  { name: 'Apify', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdgEu5tzcBgDt1nDtEPJ2SpWjJDT2MU14xA&s' },
  { name: 'Financial Datasets', logo: 'https://img.freepik.com/premium-vector/financial-data-icon-vector-image-can-be-used-project-management_120816-317110.jpg' },
];

const mcp_integrations = [
  { name: 'Notion', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.56.0/files/light/notion.png' },
  
];

export default function S1mpleChatWithIntegrations() {
 

  return (
    <div className="flex h-screen bg-white text-gray-800">
        {/* Chat area */}
        <main className="flex-1 flex flex-col">
        <Chat></Chat>
        </main>

        {/* Integrations sidebar */}
        <aside className="w-120 border-l p-4 bg-gray-50">
          <h3 className="text-lg font-medium mb-4">Integrations</h3>
          <ul className="space-y-3">
            {integrations.map(({ name, logo }) => (
              <li key={name} className="flex items-center space-x-3">
                <img src={logo} alt={name} className="h-6 w-6 object-contain" />
                <span className="text-sm">{name}</span>
              </li>
            ))}
          </ul>
          <br></br>
          <br></br>
          <h3 className="text-lg font-medium mb-4">MCP Integrations</h3>
          <ul className="space-y-3">
            {mcp_integrations.map(({ name, logo }) => (
              <li key={name} className="flex items-center space-x-3">
                <img src={logo} alt={name} className="h-6 w-6 object-contain" />
                <span className="text-sm">{name}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
  );
}
