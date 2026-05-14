import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { kpiData, monthlyData } from '../data/mockData'

function KpiCard({ label, value, color }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ color }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Tableau de bord
      </Typography>

      {/* Cartes KPI */}
      <Grid container spacing={3} mb={4}>
        {kpiData.map((kpi) => (
          <Grid item xs={12} sm={4} key={kpi.label}>
            <KpiCard {...kpi} />
          </Grid>
        ))}
      </Grid>

      {/* Graphique */}
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Évolution mensuelle
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="depenses" stroke="#d32f2f" name="Dépenses" />
              <Line type="monotone" dataKey="budget" stroke="#1976d2" name="Budget" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  )
}