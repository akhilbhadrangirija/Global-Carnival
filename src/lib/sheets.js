import { google } from 'googleapis';

const getAuth = () => {
	const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
	const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n');
	if (!clientEmail || !privateKey) {
		throw new Error('Missing Google service account credentials');
	}
	return new google.auth.JWT({
		email: clientEmail,
		key: privateKey,
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	});
};

export const appendContactRow = async ({ name, email, phone, shopName, message }) => {
	const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
	const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';
	if (!spreadsheetId) {
		throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
	}
	const auth = getAuth();
	const sheets = google.sheets({ version: 'v4', auth });
	const timestamp = new Date().toISOString();
	const values = [[timestamp, name || '', email || '', phone || '', shopName || '', message || '']];
	await sheets.spreadsheets.values.append({
		spreadsheetId,
		range: `${sheetName}!A1`,
		valueInputOption: 'USER_ENTERED',
		insertDataOption: 'INSERT_ROWS',
		requestBody: { values },
	});
	return true;
};
