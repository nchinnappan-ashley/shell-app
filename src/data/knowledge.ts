export type KnowledgeDoc = { id: string; title: string; text: string };

export const knowledgeDocs: KnowledgeDoc[] = [
  {
    id: 'catalog-overview',
    title: 'Application Catalog Overview',
    text:
      'The shell provides access to core applications used at Ashley. Applications currently exposed in the catalog include Ashley Direct, Ashley Net, Supplier, HR, Payroll, Finance, Transportation, AS400, High Jump, and More Apps. You can ask the chatbot to list all apps or search by capability to quickly navigate.'
  },
  {
    id: 'chatbot-commands',
    title: 'Chatbot Commands and Capabilities',
    text:
      'The chatbot supports: listing all applications (e.g., "list all apps"), catalog search (e.g., "search sales app"), order status lookup (e.g., "track order SO12345"), and sample report generation (e.g., "generate sales report csv 20 rows"). It will ask follow-up questions to gather missing details (slot-filling).'
  },
  {
    id: 'report-generation',
    title: 'Report Generation (Sample Data)',
    text:
      'You can generate sample data reports for quick testing and demonstration. Supported report types include sales and inventory, with CSV or JSON outputs. The chatbot can also provide download options for CSV, JSON, Excel, Word, and PDF when enabled. Example: "generate sales report json 15 rows".'
  },
  {
    id: 'search-history',
    title: 'Search History and For You',
    text:
      'The shell UI includes a persisted search history with a left drawer interface. Recent searches are recorded locally and can be reviewed or filtered. The For You section highlights frequently used applications with vibrant icons and gradient cards.'
  }
];

