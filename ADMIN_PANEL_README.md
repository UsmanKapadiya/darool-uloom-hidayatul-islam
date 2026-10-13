# Admin Panel Documentation

## Overview
The Admin Panel provides a centralized interface to manage all website content for Darool Uloom Hidayatul Islam. It includes authentication and CRUD operations for all major website sections.

## Accessing the Admin Panel

### URL
Navigate to: `http://localhost:3000/admin/login` (or your deployed URL)

### Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

> ⚠️ **Security Note**: For production, change these credentials and implement proper authentication with a backend server.

## Admin Features

### 1. **Events Management** (`/admin/events`)
- Add new events with title, date, and description
- Edit existing events
- Delete events
- All events are stored in browser's localStorage

### 2. **Gallery Management** (`/admin/gallery`)
- Add gallery items with category selection
- Upload image URLs
- Add descriptions
- Organize by categories (Events, Madrassa, Activities)
- Edit and delete gallery items

### 3. **Donations Management** (`/admin/donations`)
- Configure donation purposes and campaigns
- Set target amounts for each donation drive
- Add descriptions for each donation purpose
- Edit and delete donation purposes

### 4. **Bank Details Management** (`/admin/bank-details`)
- Store and update bank account information
- Include: Bank name, Account holder, Account number, Routing number, SWIFT code, Address
- Information persists in localStorage

### 5. **Contact Information** (`/admin/contact`)
- Manage email, phone, and WhatsApp contact details
- Store social media links (Facebook, Instagram)
- Store physical address
- All contact info accessible throughout the website

### 6. **About Section** (`/admin/about`)
- Update organization title and description
- Manage mission and vision statements
- Store founding year
- Edit and update website "About" content

## Storage

### Current Implementation
All data is stored in **browser localStorage** for easy setup without a backend. This means:
- ✅ Data persists across page refreshes in the same browser
- ❌ Data is lost when browser cache is cleared
- ❌ Data doesn't sync across different devices

### Production Implementation
For production, consider:
1. Using a backend API (Node.js, Python, etc.)
2. Implementing a database (MongoDB, PostgreSQL, etc.)
3. Adding user authentication with tokens/sessions
4. Implementing data backup and versioning

## Features

### Dashboard
- Quick access to all management sections
- User profile information
- Logout functionality

### Common Operations
- **Create**: Add new content via forms
- **Read**: View all items in a list
- **Update**: Edit existing items
- **Delete**: Remove items with confirmation

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Sidebar navigation on desktop
- Horizontal navigation on mobile

## Security Considerations

### Current Implementation
- ⚠️ Credentials are hardcoded (demo only)
- ⚠️ No backend authentication
- ⚠️ Data stored in localStorage (client-side)

### Before Production Deployment

1. **Change Admin Credentials**
   - Edit `Component/Admin/AdminContext.jsx`
   - Implement backend authentication

2. **Add Backend API**
   - Create API endpoints for data management
   - Implement proper user authentication

3. **Database Setup**
   - Set up a database (MongoDB, PostgreSQL, etc.)
   - Migrate data from localStorage

4. **HTTPS**
   - Use HTTPS for secure communication
   - Implement SSL certificates

5. **Access Control**
   - Implement role-based access control (RBAC)
   - Add audit logs for admin actions

## API Endpoints to Implement (Future)

```
POST   /api/admin/login
GET    /api/admin/profile
POST   /api/events
GET    /api/events
PUT    /api/events/:id
DELETE /api/events/:id

POST   /api/gallery
GET    /api/gallery
PUT    /api/gallery/:id
DELETE /api/gallery/:id

POST   /api/donations
GET    /api/donations
PUT    /api/donations/:id
DELETE /api/donations/:id

GET    /api/bank-details
PUT    /api/bank-details

GET    /api/contact
PUT    /api/contact

GET    /api/about
PUT    /api/about
```

## Troubleshooting

### I see a blank admin dashboard
- Ensure you're logged in at `/admin/login`
- Check browser console for errors
- Clear browser cache and try again

### Data not saving
- Check if localStorage is enabled in your browser
- Check browser console for errors
- Verify the admin form is being submitted correctly

### Can't login
- Verify username is `admin` and password is `admin123`
- Check browser console for errors
- Try a different browser

## Development

### Adding New Content Type
To add management for a new content type:

1. Create a new component file in `Component/Admin/`
   - Example: `AdminNewFeature.jsx`

2. Follow the same pattern as existing admin pages:
   - Use state for form data and items list
   - Implement CRUD operations
   - Use localStorage for persistence

3. Add new route in `App.jsx`:
   ```jsx
   <Route path="/admin/new-feature" element={<ProtectedRoute><AdminNewFeature /></ProtectedRoute>} />
   ```

4. Add navigation link in `AdminDashboard.jsx`:
   ```jsx
   { title: 'Manage New Feature', path: '/admin/new-feature', icon: '🆕' },
   ```

## Support & Maintenance

For issues or feature requests, contact the development team.
