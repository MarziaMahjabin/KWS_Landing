import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the types for our state and actions
export type CostOption = {
  id: string;
  title: string;
  cost: number;
  multiplier?: number;
  isMonthly?: boolean;
};

export type SelectionState = {
  industry: CostOption | null;
  productVersion: CostOption | null;
  platforms: CostOption[];
  loginOptions: CostOption[];
  userInterface: CostOption | null;
  thirdPartyIntegrations: CostOption[];
  cms: CostOption | null;
  functionality: CostOption[];
  communication: CostOption[];
  userRoles: CostOption[];
  timeline: CostOption | null;
  deployment: CostOption[];
  currentStep: number;
  totalCost: number;
  maintenanceCost: number;
};

type Action =
  | { type: 'SET_INDUSTRY'; payload: CostOption }
  | { type: 'SET_PRODUCT_VERSION'; payload: CostOption }
  | { type: 'TOGGLE_PLATFORM'; payload: CostOption }
  | { type: 'TOGGLE_LOGIN_OPTION'; payload: CostOption }
  | { type: 'SET_USER_INTERFACE'; payload: CostOption }
  | { type: 'TOGGLE_THIRD_PARTY'; payload: CostOption }
  | { type: 'SET_CMS'; payload: CostOption }
  | { type: 'TOGGLE_FUNCTIONALITY'; payload: CostOption }
  | { type: 'TOGGLE_COMMUNICATION'; payload: CostOption }
  | { type: 'TOGGLE_USER_ROLE'; payload: CostOption }
  | { type: 'SET_TIMELINE'; payload: CostOption }
  | { type: 'TOGGLE_DEPLOYMENT'; payload: CostOption }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'RESET' };

// Define initial state
const initialState: SelectionState = {
  industry: null,
  productVersion: null,
  platforms: [],
  loginOptions: [],
  userInterface: null,
  thirdPartyIntegrations: [],
  cms: null,
  functionality: [],
  communication: [],
  userRoles: [],
  timeline: null,
  deployment: [],
  currentStep: 1,
  totalCost: 0,
  maintenanceCost: 0,
};

// Define initial options for each step with costs
export const industryOptions: CostOption[] = [
  { id: 'education', title: 'Education', cost: 0 },
  { id: 'ai', title: 'AI', cost: 500 },
  { id: 'web3', title: 'Web3', cost: 1000 },
  { id: 'fintech', title: 'Fintech', cost: 800 },
  { id: 'healthcare', title: 'Healthcare', cost: 600 },
  { id: 'ecommerce', title: 'E-commerce', cost: 700 },
  { id: 'other', title: 'Other', cost: 0 },
];

export const productVersionOptions: CostOption[] = [
  { id: 'mvp', title: 'MVP (Minimum Viable Product)', cost: 2000 },
  { id: 'full', title: 'Full-featured Product', cost: 5000 },
];

export const platformOptions: CostOption[] = [
  { id: 'web', title: 'Web', cost: 1000 },
  { id: 'ios', title: 'iOS', cost: 1000 },
  { id: 'android', title: 'Android', cost: 1000 },
  { id: 'desktop', title: 'Desktop', cost: 1500 },
];

export const loginOptions: CostOption[] = [
  { id: 'email', title: 'Email & Password', cost: 200 },
  { id: 'social', title: 'Social Login (Google, Facebook)', cost: 300 },
  { id: 'sso', title: 'Single Sign-On (SSO)', cost: 500 },
];

export const uiOptions: CostOption[] = [
  { id: 'minimalistic', title: 'Minimalistic', cost: 500 },
  { id: 'interactive', title: 'Interactive UI', cost: 1000 },
  { id: 'advanced', title: 'Advanced Branding & Animations', cost: 1500 },
];

export const thirdPartyOptions: CostOption[] = [
  { id: 'payment', title: 'Payment Gateway (Stripe, PayPal)', cost: 500 },
  { id: 'maps', title: 'Maps / Geolocation', cost: 300 },
  { id: 'ai', title: 'AI / ML Integration', cost: 1000 },
  { id: 'crm', title: 'CRM / Marketing Tools', cost: 700 },
];

export const cmsOptions: CostOption[] = [
  { id: 'no', title: 'No', cost: 0 },
  { id: 'basic', title: 'Basic CMS', cost: 500 },
  { id: 'multilanguage', title: 'Multi-language CMS', cost: 1000 },
];

export const functionalityOptions: CostOption[] = [
  { id: 'ecommerce', title: 'E-commerce / Store', cost: 1000 },
  { id: 'scheduling', title: 'Scheduling / Booking', cost: 800 },
  { id: 'realtime', title: 'Real-time Communication (Chat / Video)', cost: 700 },
  { id: 'analytics', title: 'Data Analytics & Reports', cost: 600 },
];

export const communicationOptions: CostOption[] = [
  { id: 'textchat', title: 'Text Chat', cost: 200 },
  { id: 'audiovideo', title: 'Audio / Video Calls', cost: 500 },
  { id: 'group', title: 'Group Conferencing', cost: 700 },
];

export const userRolesOptions: CostOption[] = [
  { id: 'basic', title: 'Basic User', cost: 200 },
  { id: 'admin', title: 'Admin / Staff Roles', cost: 500 },
  { id: 'advanced', title: 'Advanced Permission Workflow', cost: 800 },
];

export const timelineOptions: CostOption[] = [
  { id: 'less1month', title: '< 1 month', cost: 0, multiplier: 1.3 },
  { id: '1to3months', title: '1–3 months', cost: 0, multiplier: 1.1 },
  { id: 'more3months', title: '> 3 months', cost: 0, multiplier: 1 },
];

export const deploymentOptions: CostOption[] = [
  { id: 'cloud', title: 'Cloud Hosting Setup', cost: 500 },
  { id: 'onpremise', title: 'On-Premise Setup', cost: 1000 },
  { id: 'maintenance', title: 'Monthly Maintenance Plan', cost: 200, isMonthly: true },
];

// Utility to toggle an item in an array
const toggleItemInArray = (array: CostOption[], item: CostOption) => {
  const exists = array.some(i => i.id === item.id);
  if (exists) {
    return array.filter(i => i.id !== item.id);
  } else {
    return [...array, item];
  }
};

// Calculate the total cost based on current selections
const calculateTotalCost = (state: SelectionState): number => {
  // Base cost from industry
  let total = state.industry?.cost || 0;
  
  // Add product version cost
  total += state.productVersion?.cost || 0;
  
  // Add platforms cost
  total += state.platforms.reduce((sum, option) => sum + option.cost, 0);
  
  // Add login options cost
  total += state.loginOptions.reduce((sum, option) => sum + option.cost, 0);
  
  // Add UI cost
  total += state.userInterface?.cost || 0;
  
  // Add third-party integrations cost
  total += state.thirdPartyIntegrations.reduce((sum, option) => sum + option.cost, 0);
  
  // Add CMS cost
  total += state.cms?.cost || 0;
  
  // Add functionality cost
  total += state.functionality.reduce((sum, option) => sum + option.cost, 0);
  
  // Add communication features cost
  total += state.communication.reduce((sum, option) => sum + option.cost, 0);
  
  // Add user roles cost
  total += state.userRoles.reduce((sum, option) => sum + option.cost, 0);
  
  // Add deployment cost (excluding monthly maintenance)
  total += state.deployment
    .filter(option => !('isMonthly' in option))
    .reduce((sum, option) => sum + option.cost, 0);
  
  // Apply timeline multiplier if selected
  if (state.timeline) {
    const multiplier = (state.timeline as any).multiplier || 1;
    total = total * multiplier;
  }
  
  return total;
};

// Calculate monthly maintenance cost
const calculateMaintenanceCost = (state: SelectionState): number => {
  return state.deployment
    .filter(option => (option as any).isMonthly)
    .reduce((sum, option) => sum + option.cost, 0);
};

// Reducer function
const reducer = (state: SelectionState, action: Action): SelectionState => {
  let newState = { ...state };
  
  switch (action.type) {
    case 'SET_INDUSTRY':
      newState = { ...state, industry: action.payload };
      break;
    case 'SET_PRODUCT_VERSION':
      newState = { ...state, productVersion: action.payload };
      break;
    case 'TOGGLE_PLATFORM':
      newState = { ...state, platforms: toggleItemInArray(state.platforms, action.payload) };
      break;
    case 'TOGGLE_LOGIN_OPTION':
      newState = { ...state, loginOptions: toggleItemInArray(state.loginOptions, action.payload) };
      break;
    case 'SET_USER_INTERFACE':
      newState = { ...state, userInterface: action.payload };
      break;
    case 'TOGGLE_THIRD_PARTY':
      newState = { ...state, thirdPartyIntegrations: toggleItemInArray(state.thirdPartyIntegrations, action.payload) };
      break;
    case 'SET_CMS':
      newState = { ...state, cms: action.payload };
      break;
    case 'TOGGLE_FUNCTIONALITY':
      newState = { ...state, functionality: toggleItemInArray(state.functionality, action.payload) };
      break;
    case 'TOGGLE_COMMUNICATION':
      newState = { ...state, communication: toggleItemInArray(state.communication, action.payload) };
      break;
    case 'TOGGLE_USER_ROLE':
      newState = { ...state, userRoles: toggleItemInArray(state.userRoles, action.payload) };
      break;
    case 'SET_TIMELINE':
      newState = { ...state, timeline: action.payload };
      break;
    case 'TOGGLE_DEPLOYMENT':
      newState = { ...state, deployment: toggleItemInArray(state.deployment, action.payload) };
      break;
    case 'SET_STEP':
      newState = { ...state, currentStep: action.payload };
      break;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
  
  // Calculate total cost after state changes
  newState.totalCost = calculateTotalCost(newState);
  newState.maintenanceCost = calculateMaintenanceCost(newState);
  
  return newState;
};

// Create context
type CostCalculatorContextType = {
  state: SelectionState;
  dispatch: React.Dispatch<Action>;
  getTotalSteps: () => number;
  getProgressPercentage: () => number;
};

const CostCalculatorContext = createContext<CostCalculatorContextType | undefined>(undefined);

// Context provider component
export const CostCalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getTotalSteps = () => 12; // Total number of steps in the form
  
  const getProgressPercentage = () => {
    return (state.currentStep / getTotalSteps()) * 100;
  };
  
  return (
    <CostCalculatorContext.Provider value={{ state, dispatch, getTotalSteps, getProgressPercentage }}>
      {children}
    </CostCalculatorContext.Provider>
  );
};

// Custom hook for using the context
export const useCostCalculator = () => {
  const context = useContext(CostCalculatorContext);
  if (context === undefined) {
    throw new Error('useCostCalculator must be used within a CostCalculatorProvider');
  }
  return context;
}; 