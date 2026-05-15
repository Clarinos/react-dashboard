import { useState } from 'react'
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material'
import { transactions } from '../data/mockData'

export default function Transactions() {
  const [search, setSearch] = useState('')

  const filtered = transactions.filter((t) =>
    t.libelle.toLowerCase().includes(search.toLowerCase()) ||
    t.categorie.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Transactions
      </Typography>

      <TextField
        label="Rechercher..."
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 3,
          width: 300,
          '& .MuiInputLabel-root': {
            color: '#fff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            color: '#fff',
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: 1,
          },
        }}
      />

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'background.default' }}>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Libellé</strong></TableCell>
              <TableCell><strong>Catégorie</strong></TableCell>
              <TableCell align="right"><strong>Montant</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((t) => (
              <TableRow key={t.id} hover>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.libelle}</TableCell>
                <TableCell>
                  <Chip label={t.categorie} size="small" />
                </TableCell>
                <TableCell align="right">
                  <Typography
                    fontWeight="bold"
                    color={t.montant > 0 ? 'success.main' : 'error.main'}
                  >
                    {t.montant > 0 ? '+' : ''}{t.montant} €
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}