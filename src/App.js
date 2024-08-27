/*
import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './TopBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Forms from './Forms';
import Production from './Production';
import Inventory from './Inventory';
import EndLinePackageQuality from './EndLinePackageQuality';
import ProductionEndOfShiftCount from './ProductionEndOfShiftCount';
import SanitationChecklistForm from './SanitationChecklistForm';
import JarsLidsTrackingForm from './JarsLidsTrackingForm'; 
import ProductOrganolepticInspectionForm from './ProductOrganolepticInspectionForm';
import DailyProductionSheet from './DailyProductionSheet';
import VerificationForm from './VerificationForm';
import BNuttyMaintenanceActivityForm from './BNuttyMaintenanceActivityForm'; 
import PreOpForm from './PreOpForm';
import PackagingQualityInspectionForm from './PackagingQualityInspectionForm';
import MetalDetectionMonitoringForm from './MetalDetectionMonitoringForm';
import ProductReleaseDocumentForm from './ProductReleaseDocumentForm';
import BatchRunInformationForm from './BatchRunInformationForm';
import Login from './Login';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import MainContent from './MainContent';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);

  const authenticateUser = (token, userRole) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', userRole);
    setIsAuthenticated(true);
    setUserRole(userRole);
    console.log('User authenticated:', { token, userRole });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole('');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    if (token && userRole) {
      setIsAuthenticated(true);
      setUserRole(userRole);
      console.log('User authenticated from localStorage:', { token, userRole });
    }
    setLoading(false);  // Set loading to false after checking auth state
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;  // You can customize this to a loader or spinner
  }

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <TopBar logoutUser={logoutUser} />}
        <div className="content" style={{ marginTop: isAuthenticated ? '60px' : '0' }}>
          <Routes>
            <Route path="/login" element={<Login authenticateUser={authenticateUser} />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/" element={
              <ProtectedRoute
                element={MainContent}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/forms" element={
              <ProtectedRoute
                element={Forms}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/forms/endline-package-quality" element={
              <ProtectedRoute
                element={EndLinePackageQuality}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/production-end-of-shift-count" element={
              <ProtectedRoute
                element={ProductionEndOfShiftCount}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/sanitation-checklist" element={
              <ProtectedRoute
                element={SanitationChecklistForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/jars-lids-tracking" element={
              <ProtectedRoute
                element={JarsLidsTrackingForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/product-organoleptic-inspection" element={
              <ProtectedRoute
                element={ProductOrganolepticInspectionForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/daily-production-sheet" element={
              <ProtectedRoute
                element={DailyProductionSheet}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/verification-form" element={
              <ProtectedRoute
                element={VerificationForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/preop" element={
              <ProtectedRoute
                element={PreOpForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/maintenance" element={
              <ProtectedRoute
                element={BNuttyMaintenanceActivityForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/package-quality-inspection" element={
              <ProtectedRoute
                element={PackagingQualityInspectionForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/metal-detection-monitoring" element={
              <ProtectedRoute
                element={MetalDetectionMonitoringForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/product-release-document" element={
              <ProtectedRoute
                element={ProductReleaseDocumentForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/batch-run-information" element={
              <ProtectedRoute
                element={BatchRunInformationForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/production" element={
              <ProtectedRoute
                element={Production}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/inventory" element={
              <ProtectedRoute
                element={Inventory}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
*/

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forms from './Forms';
import EndLinePackageQuality from './EndLinePackageQuality';
import ProductionEndOfShiftCount from './ProductionEndOfShiftCount';
import SanitationChecklistForm from './SanitationChecklistForm';
import JarsLidsTrackingForm from './JarsLidsTrackingForm'; 
import ProductOrganolepticInspectionForm from './ProductOrganolepticInspectionForm';
import DailyProductionSheet from './DailyProductionSheet';
import VerificationForm from './VerificationForm';
import BNuttyMaintenanceActivityForm from './BNuttyMaintenanceActivityForm'; 
import PreOpForm from './PreOpForm';
import PackagingQualityInspectionForm from './PackagingQualityInspectionForm';
import MetalDetectionMonitoringForm from './MetalDetectionMonitoringForm';
import ProductReleaseDocumentForm from './ProductReleaseDocumentForm';
import BatchRunInformationForm from './BatchRunInformationForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content" style={{ marginTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/forms" />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/forms/endline-package-quality" element={<EndLinePackageQuality />} />
            <Route path="/forms/production-end-of-shift-count" element={<ProductionEndOfShiftCount />} />
            <Route path="/forms/sanitation-checklist" element={<SanitationChecklistForm />} />
            <Route path="/forms/jars-lids-tracking" element={<JarsLidsTrackingForm />} />
            <Route path="/forms/product-organoleptic-inspection" element={<ProductOrganolepticInspectionForm />} />
            <Route path="/forms/daily-production-sheet" element={<DailyProductionSheet />} />
            <Route path="/forms/verification-form" element={<VerificationForm />} />
            <Route path="/forms/preop" element={<PreOpForm />} />
            <Route path="/forms/maintenance" element={<BNuttyMaintenanceActivityForm />} />
            <Route path="/forms/package-quality-inspection" element={<PackagingQualityInspectionForm />} />
            <Route path="/forms/metal-detection-monitoring" element={<MetalDetectionMonitoringForm />} />
            <Route path="/forms/product-release-document" element={<ProductReleaseDocumentForm />} />
            <Route path="/forms/batch-run-information" element={<BatchRunInformationForm />} />
            <Route path="*" element={<Navigate to="/forms" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


/*
import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './TopBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Forms from './Forms';
import Production from './Production';
import Inventory from './Inventory';
import EndLinePackageQuality from './EndLinePackageQuality';
import ProductionEndOfShiftCount from './ProductionEndOfShiftCount';
import SanitationChecklistForm from './SanitationChecklistForm';
import JarsLidsTrackingForm from './JarsLidsTrackingForm'; 
import ProductOrganolepticInspectionForm from './ProductOrganolepticInspectionForm';
import DailyProductionSheet from './DailyProductionSheet';
import VerificationForm from './VerificationForm';
import BNuttyMaintenanceActivityForm from './BNuttyMaintenanceActivityForm'; 
import PreOpForm from './PreOpForm';
import PackagingQualityInspectionForm from './PackagingQualityInspectionForm';
import MetalDetectionMonitoringForm from './MetalDetectionMonitoringForm';
import ProductReleaseDocumentForm from './ProductReleaseDocumentForm';
import BatchRunInformationForm from './BatchRunInformationForm';
import Login from './Login';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import MainContent from './MainContent';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);

  const authenticateUser = (token, userRole) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', userRole);
    setIsAuthenticated(true);
    setUserRole(userRole);
    console.log('User authenticated:', { token, userRole });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole('');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    if (token && userRole) {
      setIsAuthenticated(true);
      setUserRole(userRole);
      console.log('User authenticated from localStorage:', { token, userRole });
    }
    setLoading(false);  // Set loading to false after checking auth state
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;  // You can customize this to a loader or spinner
  }

  return (
    <Router>
      <div className="app">
       
        <TopBar logoutUser={logoutUser} />
        <div className="content" style={{ marginTop: '60px' }}>
          <Routes>
            <Route path="/login" element={<Login authenticateUser={authenticateUser} />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/" element={
              <ProtectedRoute
                element={MainContent}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/forms" element={
              <ProtectedRoute
                element={Forms}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/forms/endline-package-quality" element={
              <ProtectedRoute
                element={EndLinePackageQuality}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/production-end-of-shift-count" element={
              <ProtectedRoute
                element={ProductionEndOfShiftCount}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/sanitation-checklist" element={
              <ProtectedRoute
                element={SanitationChecklistForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/jars-lids-tracking" element={
              <ProtectedRoute
                element={JarsLidsTrackingForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/product-organoleptic-inspection" element={
              <ProtectedRoute
                element={ProductOrganolepticInspectionForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/daily-production-sheet" element={
              <ProtectedRoute
                element={DailyProductionSheet}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/verification-form" element={
              <ProtectedRoute
                element={VerificationForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/preop" element={
              <ProtectedRoute
                element={PreOpForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/maintenance" element={
              <ProtectedRoute
                element={BNuttyMaintenanceActivityForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/package-quality-inspection" element={
              <ProtectedRoute
                element={PackagingQualityInspectionForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/metal-detection-monitoring" element={
              <ProtectedRoute
                element={MetalDetectionMonitoringForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/product-release-document" element={
              <ProtectedRoute
                element={ProductReleaseDocumentForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/forms/batch-run-information" element={
              <ProtectedRoute
                element={BatchRunInformationForm}
                isAuthenticated={isAuthenticated}
                roles={['worker']}
                userRole={userRole}
              />
            } />
            <Route path="/production" element={
              <ProtectedRoute
                element={Production}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="/inventory" element={
              <ProtectedRoute
                element={Inventory}
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
*/