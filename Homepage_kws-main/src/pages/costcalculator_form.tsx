import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProgressBar from "@/components/ui/ProgressBar";
import FormStep from "@/components/cost/FormStep";
import SummaryPanel from "@/components/cost/SummaryPanel";
import FormNavigation from "@/components/cost/FormNavigation";
import QuickNavigation from "@/components/cost/QuickNavigation";
import { useCostCalculator } from "@/context/CostCalculatorContext";
import {
  industryOptions,
  productVersionOptions,
  platformOptions,
  loginOptions,
  uiOptions,
  thirdPartyOptions,
  cmsOptions,
  functionalityOptions,
  communicationOptions,
  userRolesOptions,
  timelineOptions,
  deploymentOptions
} from "@/context/CostCalculatorContext";
import * as Icons from "@/components/cost/CostIcons";

// Icons mapping for each step
const industryIcons = {
  education: <Icons.EducationIcon />,
  ai: <Icons.AIIcon />,
  web3: <Icons.Web3Icon />,
  fintech: <Icons.FintechIcon />,
  healthcare: <Icons.HealthcareIcon />,
  ecommerce: <Icons.EcommerceIcon />,
  other: <Icons.OtherIcon />
};

const productVersionIcons = {
  mvp: <Icons.MVPIcon />,
  full: <Icons.FullProductIcon />
};

const platformIcons = {
  web: <Icons.WebIcon />,
  ios: <Icons.iOSIcon />,
  android: <Icons.AndroidIcon />,
  desktop: <Icons.DesktopIcon />
};

const loginIcons = {
  email: <Icons.EmailIcon />,
  social: <Icons.SocialIcon />,
  sso: <Icons.SSOIcon />
};

const uiIcons = {
  minimalistic: <Icons.MinimalisticIcon />,
  interactive: <Icons.InteractiveIcon />,
  advanced: <Icons.AdvancedUIIcon />
};

const thirdPartyIcons = {
  payment: <Icons.PaymentIcon />,
  maps: <Icons.MapsIcon />,
  ai: <Icons.AiMlIcon />,
  crm: <Icons.CrmIcon />
};

const cmsIcons = {
  no: <Icons.NoCmsIcon />,
  basic: <Icons.BasicCmsIcon />,
  multilanguage: <Icons.MultiLanguageCmsIcon />
};

const functionalityIcons = {
  ecommerce: <Icons.EcommerceStoreIcon />,
  scheduling: <Icons.SchedulingIcon />,
  realtime: <Icons.RealTimeIcon />,
  analytics: <Icons.AnalyticsIcon />
};

const communicationIcons = {
  textchat: <Icons.TextChatIcon />,
  audiovideo: <Icons.AudioVideoIcon />,
  group: <Icons.GroupConferenceIcon />
};

const userRolesIcons = {
  basic: <Icons.BasicUserIcon />,
  admin: <Icons.AdminRolesIcon />,
  advanced: <Icons.AdvancedPermissionsIcon />
};

const timelineIcons = {
  less1month: <Icons.LessThanMonthIcon />,
  "1to3months": <Icons.OneToThreeMonthsIcon />,
  more3months: <Icons.MoreThanThreeMonthsIcon />
};

const deploymentIcons = {
  cloud: <Icons.CloudHostingIcon />,
  onpremise: <Icons.OnPremiseIcon />,
  maintenance: <Icons.MaintenanceIcon />
};

const CostCalculatorForm: React.FC = () => {
  const { state, getProgressPercentage } = useCostCalculator();
  const navigate = useNavigate();
  const progress = getProgressPercentage();
  
  const handleBackToStart = () => {
    navigate('/cost-calculator');
  };

  // Render the current step based on state.currentStep
  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <FormStep
            title="Choose your industry"
            description="Select one option to continue"
            options={industryOptions}
            actionType="SET_INDUSTRY"
            icons={industryIcons}
            selectedValue={state.industry}
          />
        );
      case 2:
        return (
          <FormStep
            title="Which version of the product do you wish to build?"
            description="Select one option to continue"
            options={productVersionOptions}
            actionType="SET_PRODUCT_VERSION"
            icons={productVersionIcons}
            selectedValue={state.productVersion}
          />
        );
      case 3:
        return (
          <FormStep
            title="What type of platform do you need?"
            description="Select one or more platforms"
            options={platformOptions}
            actionType="TOGGLE_PLATFORM"
            isMultiSelect={true}
            icons={platformIcons}
            selectedValues={state.platforms}
          />
        );
      case 4:
        return (
          <FormStep
            title="Login Options"
            description="Select one or more login options for your application"
            options={loginOptions}
            actionType="TOGGLE_LOGIN_OPTION"
            isMultiSelect={true}
            icons={loginIcons}
            selectedValues={state.loginOptions}
          />
        );
      case 5:
        return (
          <FormStep
            title="How do you see the user interface design of your solution?"
            description="Select one option to continue"
            options={uiOptions}
            actionType="SET_USER_INTERFACE"
            icons={uiIcons}
            selectedValue={state.userInterface}
          />
        );
      case 6:
        return (
          <FormStep
            title="Do you need any third-party integrations?"
            description="Select one or more integrations"
            options={thirdPartyOptions}
            actionType="TOGGLE_THIRD_PARTY"
            isMultiSelect={true}
            icons={thirdPartyIcons}
            selectedValues={state.thirdPartyIntegrations}
          />
        );
      case 7:
        return (
          <FormStep
            title="Do you need a content management system?"
            description="Select one option to continue"
            options={cmsOptions}
            actionType="SET_CMS"
            icons={cmsIcons}
            selectedValue={state.cms}
          />
        );
      case 8:
        return (
          <FormStep
            title="What kind of functionality will your solution have?"
            description="Select one or more functionalities"
            options={functionalityOptions}
            actionType="TOGGLE_FUNCTIONALITY"
            isMultiSelect={true}
            icons={functionalityIcons}
            selectedValues={state.functionality}
          />
        );
      case 9:
        return (
          <FormStep
            title="Real-time Communication"
            description="Select one or more communication options"
            options={communicationOptions}
            actionType="TOGGLE_COMMUNICATION"
            isMultiSelect={true}
            icons={communicationIcons}
            selectedValues={state.communication}
          />
        );
      case 10:
        return (
          <FormStep
            title="User Roles"
            description="Select one or more user role options"
            options={userRolesOptions}
            actionType="TOGGLE_USER_ROLE"
            isMultiSelect={true}
            icons={userRolesIcons}
            selectedValues={state.userRoles}
          />
        );
      case 11:
        return (
          <FormStep
            title="Timeline"
            description="Select your preferred timeline"
            options={timelineOptions}
            actionType="SET_TIMELINE"
            icons={timelineIcons}
            selectedValue={state.timeline}
          />
        );
      case 12:
        return (
          <FormStep
            title="Deployment & Maintenance"
            description="Select one or more deployment options"
            options={deploymentOptions}
            actionType="TOGGLE_DEPLOYMENT"
            isMultiSelect={true}
            icons={deploymentIcons}
            selectedValues={state.deployment}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <main className="flex flex-col px-[85px] max-md:px-[30px] max-sm:px-5 bg-[#050D36]">
        <div className="flex items-center text-[#913BFF] mt-10 mb-4 cursor-pointer group" onClick={handleBackToStart}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform"
          >
            <path
              d="M10.25 19.5H29.75M10.25 19.5L18.375 11.375M10.25 19.5L18.375 27.625"
              stroke="#913BFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-lg group-hover:underline">Back to calculator start</span>
        </div>
        
        <QuickNavigation />
        <ProgressBar progress={progress} className="mb-10" />

        <div className="flex gap-10 max-lg:flex-col">
          <div className="flex-1">
            {renderCurrentStep()}
            <FormNavigation />
          </div>
          <div className="w-[400px] max-lg:w-full">
            <SummaryPanel />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CostCalculatorForm; 